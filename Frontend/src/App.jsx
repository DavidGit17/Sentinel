import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hackerlogin from "./Components/Login/Hackerlogin";
import Homepage from "./Components/Homepage";
import Landingpage from "./Components/Landingpage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/hackerlogin" element={<Hackerlogin />} />
        <Route path="/" element={<Homepage />} />
        <Route path="landingpage" element={<Landingpage />} />
      </Routes>
    </Router>
  );
}

export default App;
