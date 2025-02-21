import React from 'react';
import bg from '../assets/bg.jpeg';
import hiring from '../assets/hiring.png';
import Navbar from './Navbar';
import Upload from './upload';


function Homepage() {
  return (
    <>
      <div className="relative w-screen h-screen ">
        {/* Background Image */}
        <img 
  className="fixed inset-0 w-full h-full object-cover -z-10" 
  src={bg} 
  alt="background" 
/>

        {/* Navbar */}
        <Navbar />

        {/* Content Section */}
        <div className="flex flex-row justify-between items-center h-full px-24 mt-[-90px]">
          {/* Text Section */}
          <div className="text-white ">
            <h1 className="font-bold ml-24 text-6xl">Welcome to</h1>
            <h1 className="font-bold text-6xl ml-34 mt-12 mb-8 text-yellow-400">OptiHire</h1>
            <span className='text-xl ml-22 mb-12'>Find the perfect candidate effortlessly. </span>
            <p className='text-lg ml-10 mb-8'>
              OptiHire analyzes resumes, evaluates skills, and ranks applicants to match your job requirements with precision.
              Streamline hiring with AI-powered efficiency. 🚀
            </p>
          </div>

          {/* Image Section */}
          <img src={hiring} alt="hiring" className="w-2/5 h-auto mr-10" />
        </div>

        {/* Separate Button Section */}
        
        <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center mt-[-60px]" >
  <div className="max-w-3xl mx-auto p-8 text-white  text-center">
    <h1 className="text-6xl font-bold mb-8 text-yellow-400">How to Use OptiHire</h1>
    
    <ol className="list-decimal pl-5 space-y-3 text-2xl text-justify">
      <li><strong>Upload Resumes:</strong> Navigate to the "Upload" section and add resumes in PDF or DOCX format.</li>
      <li><strong>Enter Job Description:</strong> Provide the job role details and required skills.</li>
      <li><strong>AI Processing:</strong> OptiHire analyzes the resumes and matches them with the job criteria.</li>
      <li><strong>View Ranked Candidates:</strong> The system will rank candidates based on their suitability.</li>
      
    </ol>
  </div>

  {/* Button is now inside the flex column, ensuring it stays below the instructions */}
  <div className="mt-8">
    <a 
      href="/upload" 
      className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-xl text-lg hover:bg-yellow-500 transition-all duration-300"
    >
      Get Started 🚀
    </a>
  </div>
</div>
</div>
      
      
    </>
  );
}

export default Homepage;
