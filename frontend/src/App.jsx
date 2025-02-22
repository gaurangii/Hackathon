import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Homepage from './components/Homepage'
import Upload from "./components/upload";
import AboutUs from "./components/Aboutus";
import ContactUs from "./components/Contact";

function App() {
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/about-us" element={<AboutUs/>} />
        <Route path="/contact-us" element={<ContactUs/>} />
      </Routes>
    </Router>
  );
}


export default App
