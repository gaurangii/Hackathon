const express = require("express");
const { db1 } = require("./dbConfig");
const multer = require("multer");

const router = express.Router();

// Multer Storage Configuration (Store in Memory)
const upload = multer({ storage: multer.memoryStorage() });

// Route to Fetch All PDF Data from db1
router.get("/data", async (req, res) => {
  try {
    const result1 = await new Promise((resolve, reject) => {
      db1.query("SELECT id, name FROM pdf_files", (err, results) => {
        if (err) reject(err);
        else resolve(results);
      });
    });

    res.json({ database1: result1 });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

// Route to Fetch a PDF as a File (Download/View)
router.get("/pdf/:id", async (req, res) => {
  const pdfId = req.params.id;

  try {
    const result = await new Promise((resolve, reject) => {
      db1.query("SELECT name, file_data FROM pdf_files WHERE id = ?", [pdfId], (err, results) => {
        if (err) reject(err);
        else resolve(results);
      });
    });

    if (result.length === 0) {
      return res.status(404).json({ error: "PDF not found" });
    }

    const pdfFile = result[0];
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", `inline; filename="${pdfFile.name}"`);
    res.send(pdfFile.file_data); 
  } catch (error) {
    console.error("Error retrieving PDF:", error);
    res.status(500).json({ error: "Failed to retrieve PDF" });
  }
});

// Route to Upload Multiple PDFs
router.post("/upload", upload.array("files"), async (req, res) => {
  console.log("Received Upload Request:", req.files);

  try {
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ error: "No files uploaded" });
    }

    const pdfFiles = req.files.filter(file => file.mimetype === "application/pdf");

    if (pdfFiles.length === 0) {
      return res.status(400).json({ error: "No valid PDF files found" });
    }

    const sql = "INSERT INTO pdf_files (name, file_data) VALUES ?";
    const values = pdfFiles.map((file) => [file.originalname, file.buffer]);

    db1.query(sql, [values], (err, result) => {
      if (err) {
        console.error("Error inserting files into database:", err);
        return res.status(500).json({ error: "Database insertion failed" });
      }
      res.json({ message: "Files uploaded successfully", insertedRows: result.affectedRows });
    });

  } catch (error) {
    console.error("Upload Error:", error);
    res.status(500).json({ error: "File upload failed" });
  }
});

module.exports = router;
