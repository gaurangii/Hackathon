import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

const ContactUs = () => {

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
          <h1 className="text-5xl font-bold text-blue-500 mb-6">Contact Us</h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Have questions or need assistance? Reach out to us at <span className="text-blue-400 font-semibold">OptiHire</span>,
            and our team will be happy to help. Let's connect and build a better hiring experience together!
          </p>
        </div>
  
        <div className="mt-12 max-w-3xl mx-auto bg-gray-800 p-8 rounded-2xl shadow-lg">
          <form className="flex flex-col space-y-6">
            <div>
              <label className="block text-gray-300 text-lg mb-2">Name</label>
              <input type="text" className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your Name" />
            </div>
            
            <div>
              <label className="block text-gray-300 text-lg mb-2">Email</label>
              <input type="email" className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your Email" />
            </div>
            
            <div>
              <label className="block text-gray-300 text-lg mb-2">Message</label>
              <textarea className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" rows="5" placeholder="Your Message"></textarea>
            </div>
            
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300">Send Message</button>
          </form>
        </div>
  
        <div className="mt-12 text-center">
          <h2 className="text-3xl font-bold text-blue-500">Our Office</h2>
          <p className="text-lg text-gray-300 mt-2">Jims Rohini, Sec-5 , Delhi</p>
          <p className="text-lg text-gray-300 mt-1">Email: support@optihire.com | Phone: +91 9773713064</p>
        </div>
        <Footer />
      </div>
    );
  };
  
  export default ContactUs;
  