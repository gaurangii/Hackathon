import React, { useState } from "react";
import { Briefcase, MapPin, Search } from "lucide-react";

const jobsData = [
  {
    id: 1,
    title: "Software Engineer",
    company: "Google",
    location: "Mountain View, CA",
    type: "Full-time",
    salary: "$120k - $150k",
  },
  {
    id: 2,
    title: "Product Designer",
    company: "Apple",
    location: "Cupertino, CA",
    type: "Remote",
    salary: "$100k - $130k",
  },
  {
    id: 3,
    title: "Data Scientist",
    company: "Amazon",
    location: "Seattle, WA",
    type: "Hybrid",
    salary: "$110k - $140k",
  },
  {
    id: 4,
    title: "Frontend Developer",
    company: "Facebook",
    location: "Menlo Park, CA",
    type: "Full-time",
    salary: "$115k - $145k",
  },
];

function Job() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredJobs = jobsData.filter((job) =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      {/* Header */}
      <header className="text-center my-8">
        <h1 className="text-4xl font-bold">Find Your Dream Job</h1>
        <p className="text-gray-400 mt-2">Browse the latest job listings.</p>
      </header>

      {/* Search Bar */}
      <div className="flex justify-center mb-6">
        <div className="relative w-full max-w-lg">
          <input
            type="text"
            placeholder="Search jobs..."
            className="w-full p-3 pl-10 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-3 top-3 text-gray-400" size={20} />
        </div>
      </div>

      {/* Job Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <div
              key={job.id}
              className="bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
            >
              <h2 className="text-xl font-semibold">{job.title}</h2>
              <p className="text-yellow-400">{job.company}</p>
              <div className="flex items-center text-gray-400 mt-2">
                <MapPin size={16} className="mr-1" />
                <span>{job.location}</span>
              </div>
              <div className="flex items-center text-gray-400 mt-1">
                <Briefcase size={16} className="mr-1" />
                <span>{job.type}</span>
              </div>
              <p className="mt-2 text-lg font-bold text-green-400">
                {job.salary}
              </p>
              <button className="mt-4 w-full bg-yellow-400 text-gray-900 font-bold py-2 px-4 rounded-lg hover:bg-yellow-500 transition">
                Apply Now
              </button>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-400">
            No jobs found.
          </p>
        )}
      </div>
    </div>
  );
}

export default Job;
