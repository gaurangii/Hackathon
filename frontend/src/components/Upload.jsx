import React, { useState } from "react";
import { Plus, Trash, Upload as UploadIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import axios from "axios";

function Upload() {
  const [files, setFiles] = useState([]);
  const [ranking, setRanking] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleFileChange = (event) => {
    const newFiles = Array.from(event.target.files);
    if (files.length + newFiles.length > 5) {
      setErrorMessage("You can upload a maximum of 5 files.");
      return;
    }
    setFiles([...files, ...newFiles]);
    setErrorMessage(""); // Clear error when valid
  };

  const removeFile = (index) => {
    const updatedFiles = files.filter((_, i) => i !== index);
    setFiles(updatedFiles);
  };

  const handleSubmit = async () => {
    if (files.length === 0) {
      setErrorMessage("Please select at least one file to upload.");
      return;
    }

    const formData = new FormData();
    files.forEach((file) => {
      formData.append("files", file);
    });

    try {
      setLoading(true);
      setErrorMessage(""); // Clear previous errors
      const response = await axios.post("http://localhost:9090/pdf/upload_file", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("Files uploaded successfully!");
      console.log("Response:", response.data);
      setFiles([]); // Clear uploaded files

      // Redirect to /Jd after successful upload
      window.location.href = "http://localhost:5174/Jd";
    } catch (error) {
      setErrorMessage("Error uploading files. Please try again.");
      console.error("❌ Upload error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white relative">
      {/* Go Back Button */}
      <button
        className="absolute top-4 left-4 cursor-pointer duration-200 hover:scale-125 active:scale-100"
        title="Go Back"
        onClick={() => navigate("/")}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 24 24" className="stroke-blue-300">
          <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="1.5" d="M11 6L5 12M5 12L11 18M5 12H19"></path>
        </svg>
      </button>

      {/* Upload Section */}
      <h1 className="text-4xl font-bold mb-6 mt-8">Upload Resumes</h1>

      {/* Upload Box */}
      <div className="p-6 bg-gray-800 rounded-lg shadow-lg w-96 text-center">
        <label className={`flex flex-col items-center justify-center p-4 border-2 border-dashed ${
            files.length < 5 ? "border-yellow-400" : "border-gray-600"
          } rounded-lg cursor-pointer`}
        >
          <input
            type="file"
            multiple
            accept="application/pdf"
            className="hidden"
            onChange={handleFileChange}
            disabled={files.length >= 5}
          />
          <Plus size={40} className="text-yellow-400" />
          <p className="mt-2 text-sm">Click to upload resumes (Max 5 files)</p>
        </label>

        {/* Error Message */}
        {errorMessage && (
          <p className="text-red-500 mt-3">{errorMessage}</p>
        )}

        {/* Uploaded Files List */}
        {files.length > 0 && (
          <div className="mt-4 space-y-2">
            {files.map((file, index) => (
              <div key={index} className="flex justify-between items-center bg-gray-700 p-2 rounded-lg">
                <span className="truncate w-3/4">{file.name}</span>
                <button onClick={() => removeFile(index)} className="text-red-500 hover:text-red-600">
                  <Trash size={20} />
                </button>
              </div>
            ))}
          </div>
        )}


<a href="/Jd"
          onClick={handleSubmit}
          disabled={files.length === 0 || loading}
          className="mt-4 w-full bg-yellow-400 text-gray-900 font-bold py-2 px-4 rounded-lg flex items-center justify-center hover:bg-yellow-500 transition disabled:opacity-50"
        >
          {loading ? "Uploading..." : (
            <>
              <UploadIcon size={20} className="mr-2" />
              Submit
            </>
          )}
        </a>
        
      </div>

      {/* Ranking Results */}
      {ranking && (
        <div className="mt-6 p-6 bg-gray-800 rounded-lg shadow-lg w-96">
          <h2 className="text-2xl font-bold mb-4">Candidate Ranking</h2>
          <ul className="space-y-2">
            {ranking.map((candidate, index) => (
              <li key={index} className="p-2 bg-gray-700 rounded-lg flex justify-between">
                <span>{candidate.name}</span>
                <span className="text-yellow-400 font-semibold">{candidate.score}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default Upload;
