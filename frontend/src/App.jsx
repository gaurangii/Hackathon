import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Homepage from './components/Homepage'
import Upload from "./components/upload";


function App() {
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/upload" element={<Upload />} />
        {/* <Route path="/jobs" element={<Job />} /> */}
      </Routes>
    </Router>
  );
}


export default App
