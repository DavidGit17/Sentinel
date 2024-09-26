import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hackerlogin from "./Components/Login/Hackerlogin";
import Homepage from "./Components/Homepage";
import Landingpage from "./Components/Landingpage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/hackerlogin" element={<Hackerlogin />} />
        <Route path="/customerlogin" element={<Customerlogin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cusignup" element={<Cusignup />} />
        <Route path="/penforpass" element={<Penforpass />} />
        <Route path="/comforpass" element={<Comforpass />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/whysentinel" element={<WhySentinel />} />
        <Route path="/hacker" element={<Hacker />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/submission" element={<Submission />} />
        <Route path="/work" element={<Work />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/cusdash" element={<Cusdash />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/custasks" element={<Custasks />} />
        <Route path="/slogin" element={<Slogin />} />
      </Routes>
      =======
      <Routes>
        <Route path="/hackerlogin" element={<Hackerlogin />} />
        <Route path="/" element={<Homepage />} />
        <Route path="landingpage" element={<Landingpage />} />
      </Routes>
    </Router>
  );
}

export default App;
