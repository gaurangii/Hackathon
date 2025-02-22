import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Homepage from './components/Homepage'
import Upload from './components/Upload';
import JobUpload from "./components/JobUpload";
import Jd from "./components/Jd"


function App() {
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/upload" element={<Upload />} />
        {/* <Route path="/jobs" element={<Job />} /> */}
        <Route path="/JobUpload" element={<JobUpload/>} />
        <Route path="/Jd" element={<Jd/>} />
      </Routes>
    </Router>
  );
}


export default App
