import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landingpage from "./Components/Landingpage";
import Homepage from "./Components/Homepage";
import Hackerlogin from "./Components/Login/Hackerlogin";
import Customerlogin from "./Components/Login/Customerlogin";
import Signup from "./Components/Hacker/Signup";
import Cusignup from "./Components/Customer/cusignup";
import Penforpass from "./Components/Hacker/penforpass";
import Comforpass from "./Components/Customer/comforpass";
import WhySentinel from "./Components/WhySentinel";
import Hacker from "./Components/Hacker";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Dashboard from "./Components/Dashboard";
function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Landingpage/>} />
          <Route path="/homepage" element={<Homepage/>} />
          <Route path="/hackerlogin" element={<Hackerlogin/>} />
          <Route path="/customerlogin" element={<Customerlogin/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/cusignup" element={<Cusignup/>} />
          <Route path="/penforpass" element={<Penforpass/>} />
          <Route path="/comforpass" element={<Comforpass/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/whysentinel" element={<WhySentinel/>} />
          <Route path="/hacker" element={<Hacker/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
        </Routes>
    </Router>
  );
}

export default App;
