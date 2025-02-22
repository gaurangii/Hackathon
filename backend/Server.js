const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const multer = require("multer");
const path = require("path");
const { db1 } = require("./dbConfig");

const app = express();
const PORT = 9090;

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// 📂 Set the upload directory
const uploadDirectory = "C:/Users/prabh/OneDrive/Desktop/llm-app/examples/pipelines/demo-question-answering/data";

// ⚙️ Configure multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDirectory);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Keep the original filename
  },
});

const upload = multer({ storage: storage });

// 📤 Route to handle file uploads
app.post("/pdf/upload_file", upload.array("files", 5), (req, res) => {
  if (!req.files || req.files.length === 0) {
    return res.status(400).json({ message: "No files uploaded" });
  }
  res.json({ message: "Files uploaded successfully", files: req.files });
});

// ✅ Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
