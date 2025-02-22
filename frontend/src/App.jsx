import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Homepage from './components/Homepage'
<<<<<<< HEAD
import Upload from "./components/upload";
import AboutUs from "./components/Aboutus";
import ContactUs from "./components/Contact";
=======
import Upload from "./components/Upload.jsx";
import Job from "./components/jobs";
>>>>>>> b1108ccdcf27deb937a47fa564ea92c9b381bd71

function App() {
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/upload" element={<Upload />} />
<<<<<<< HEAD
        <Route path="/about-us" element={<AboutUs/>} />
        <Route path="/contact-us" element={<ContactUs/>} />
=======
        <Route path="/jobs" element={<Job />} />
>>>>>>> b1108ccdcf27deb937a47fa564ea92c9b381bd71
      </Routes>
    </Router>
  );
}


export default App
