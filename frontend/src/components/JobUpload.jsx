import React, { useState } from "react";
// import { postJob } from "../api";

function JobUpload() {
    const [job, setJob] = useState({
        title: "",
        description: "",
        location: "",
        salary: ""
    });

    const handleChange = (e) => {
        setJob({ ...job, [e.target.name]: e.target.value });
    };

    const handleUpload = async () => {
        await postJob(job);
        alert("Job posted successfully!");
    };

    return (
        <div>
            <h2>Post a Job</h2>
            <textarea name="description" placeholder="Job Description" onChange={handleChange} />

            <button onClick={handleUpload}>Upload Job</button>
        </div>
    );
}

export default JobUpload;