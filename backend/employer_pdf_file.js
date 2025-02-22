const express = require("express");
const multer = require("multer");
const axios = require("axios");
const path = require("path");
const { db1 } = require("./dbConfig");

const router = express.Router();

// Define the storage location
const uploadDirectory = "C:/Users/prabh/OneDrive/Desktop/llm-app/examples/pipelines/demo-question-answering/data/";
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadDirectory),
  filename: (req, file, cb) => cb(null, file.originalname),
});
const upload = multer({ storage });

// 📌 Upload resumes and start ranking
router.post("/upload_file", upload.array("files", 5), async (req, res) => {
  if (!req.files || req.files.length === 0) {
    return res.status(400).json({ message: "No files uploaded" });
  }

  try {
    // Fetch all job roles from MySQL
    const [jobs] = await db1.promise().query(
      "SELECT job_title, job_description, work_location, salary, education, work_experience FROM jobs"
    );

    if (jobs.length === 0) {
      return res.status(404).json({ message: "No job roles found" });
    }

    console.log("📥 Fetched Job Roles:", jobs);

    // Prepare data for AI API
    const uploadedFiles = req.files.map((file) => ({
      filename: file.originalname,
      path: path.join(uploadDirectory, file.filename),
    }));

    // Loop through each job role and get AI ranking
    let rankedResults = [];
    for (let job of jobs) {
      const requestData = {
        prompt: {
          job_title: job.job_title,
          job_description: job.job_description,
          work_location: job.work_location,
          salary: job.salary,
          education: job.education,
          work_experience: job.work_experience,
          uploaded_files: uploadedFiles,
        },
      };

      console.log(`📤 Sending Request for Job: ${job.job_title}`, requestData);

      try {
        const aiResponse = await axios.post("http://localhost:8000/v1/pw_ai_answer", requestData);
        console.log(`📥 AI Response for ${job.job_title}:`, aiResponse.data);

        rankedResults.push({
          job_title: job.job_title,
          ranking: aiResponse.data, // Store AI ranking response
        });
      } catch (error) {
        console.error(`❌ AI API Error for ${job.job_title}:`, error);
        rankedResults.push({
          job_title: job.job_title,
          ranking: [],
          error: error.message,
        });
      }
    }

    res.json({ message: "Resumes uploaded and ranked", rankings: rankedResults });
  } catch (error) {
    console.error("❌ Error fetching job roles:", error);
    res.status(500).json({ message: "Error processing ranking", error: error.message });
  }
});

module.exports = router;
