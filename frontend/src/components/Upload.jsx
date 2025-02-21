import React, { useState } from "react";
import axios from "axios";
import { Plus, Trash, Upload as UploadIcon } from "lucide-react";

function Upload() {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (event) => {
    const newFiles = Array.from(event.target.files);
    if (files.length + newFiles.length > 5) {
      alert("You can upload a maximum of 5 files.");
      return;
    }
    setFiles([...files, ...newFiles]);
  };

  const removeFile = (index) => {
    const updatedFiles = files.filter((_, i) => i !== index);
    setFiles(updatedFiles);
  };

  const handleSubmit = async () => {
    if (files.length === 0) {
      alert("Please select at least one file to upload.");
      return;
    }

    const formData = new FormData();
    files.forEach((file) => {
      formData.append("files", file);
    });

    try {
      setLoading(true);
      const response = await axios.post("http://localhost:9090/pdf/upload_file", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("Files uploaded successfully!");
      console.log("Response:", response.data);
      setFiles([]); // Clear uploaded files
    } catch (error) {
      alert("Error uploading files. Please try again.");
      console.error("Upload error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-6">Upload Files</h1>

      {/* Upload Box */}
      <div className="p-6 bg-gray-800 rounded-lg shadow-lg w-96 text-center">
        <label
          className={`flex flex-col items-center justify-center p-4 border-2 border-dashed ${
            files.length < 5 ? "border-yellow-400" : "border-gray-600"
          } rounded-lg cursor-pointer`}
        >
          <input
            type="file"
            multiple
            accept="image/*, application/pdf"
            className="hidden"
            onChange={handleFileChange}
            disabled={files.length >= 5}
          />
          <Plus size={40} className="text-yellow-400" />
          <p className="mt-2 text-sm">Click to upload (Max 5 files)</p>
        </label>

        {/* Uploaded Files List */}
        {files.length > 0 && (
          <div className="mt-4 space-y-2">
            {files.map((file, index) => (
              <div
                key={index}
                className="flex justify-between items-center bg-gray-700 p-2 rounded-lg"
              >
                <span className="truncate w-3/4">{file.name}</span>
                <button
                  onClick={() => removeFile(index)}
                  className="text-red-500 hover:text-red-600"
                >
                  <Trash size={20} />
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Submit Button */}
        <button
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
        </button>
      </div>
    </div>
  );
}

export default Upload;
