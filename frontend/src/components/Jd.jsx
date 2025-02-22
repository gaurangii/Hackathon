import React, { useState } from "react";
import axios from "axios";

function JobUpload() {
    const [job, setJob] = useState({ description: "" });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setJob({ ...job, [e.target.name]: e.target.value });
    };

    const handleUpload = async () => {
        if (!job.description.trim()) {
            alert("Please enter a job description!");
            return;
        }

        setLoading(true);

        try {
            const response = await axios.post("http://localhost:9090/addDescription", job, {
                headers: { "Content-Type": "application/json" },
            });

            alert("Job posted successfully!");
            setJob({ description: "" }); // Clear input
        } catch (error) {
            console.error("Error posting job:", error);
            alert("Failed to post job. Try again.");
        }

        setLoading(false);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-6">
            <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Enter The Job Description </h2>

                <textarea
                    name="description"
                    placeholder="Enter job description..."
                    value={job.description}
                    onChange={handleChange}
                    className="w-full h-32 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />

                <button
                    onClick={handleUpload}
                    disabled={loading}
                    className={`mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded-lg transition duration-300 ${
                        loading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600"
                    }`}
                >
                    {loading ? "Uploading..." : "Find The Candidates"}
                </button>
            </div>
        </div>
    );
}

export default JobUpload;