import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

const AboutUs = () => {

    const navigate = useNavigate();


    return (
      <div className="min-h-screen bg-gray-900 text-white px-8 py-16">
        <button
        className="absolute top-4 left-4 cursor-pointer duration-200 hover:scale-125 active:scale-100"
        title="Go Back"
        onClick={() => navigate("/")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50px"
          height="50px"
          viewBox="0 0 24 24"
          className="stroke-blue-300"
        >
          <path
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="1.5"
            d="M11 6L5 12M5 12L11 18M5 12H19"
          ></path>
        </svg>
      </button>
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-blue-500 mb-6">About OptiHire</h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            At <span className="text-blue-400 font-semibold">OptiHire</span>, we revolutionize the hiring process by
            leveraging cutting-edge technology to connect top talent with the right opportunities.
            Our goal is to simplify recruitment, making it faster, smarter, and more efficient
            for both employers and job seekers.
          </p>
        </div>
  
        <div className="mt-12 grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-semibold text-blue-400">Our Mission</h2>
            <p className="text-gray-300 mt-4">
              We aim to bridge the gap between skilled professionals and forward-thinking companies
              by streamlining hiring with AI-driven solutions and intuitive job-matching algorithms.
            </p>
          </div>
          
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-semibold text-blue-400">Why Choose OptiHire?</h2>
            <ul className="list-disc text-gray-300 mt-4 pl-5 space-y-2">
              <li>AI-powered candidate matching</li>
              <li>Seamless and transparent recruitment process</li>
              <li>Data-driven insights for better hiring decisions</li>
              <li>Personalized experience for both employers and job seekers</li>
            </ul>
          </div>
        </div>
  
        <div className="mt-16 text-center">
          <h2 className="text-4xl font-bold text-blue-500">Join Us</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mt-4">
            Whether you’re looking to hire the best talent or seeking your dream job, OptiHire
            is here to help. Let’s build the future of hiring together!
          </p>
        </div>
        <Footer />
      </div>
    );
  };
  
  export default AboutUs;
  