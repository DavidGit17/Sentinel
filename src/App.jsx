import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import { Landingpage } from './Components/Landingpage';
import { Homepage } from './Components/Homepage';
import { WhySentinel } from './Components/WhySentinel';
import { Hacker } from './Components/Hacker';
import { About } from './Components/About';
import { Contact } from './Components/Contact';
import { Error } from './Components/Error';
import { Hackerlogin } from './Components/Login/Hackerlogin';
import { Customerlogin } from './Components/Login/Customerlogin';
import { Signup } from './Components/Signup';
import Penforpass from './Components/penforpass';
import Comforpass from './Components/comforpass';
import { Cusignup } from './Components/cusignup';

function App() {
  return (
    <Router>
      <Navbar /> {/* Add the Navbar component here */}
      <div className="container mx-auto mt-5">
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/whysentinel" element={<WhySentinel />} />
          <Route path="/hacker" element={<Hacker />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
          <Route path="/hackerlogin" element={<Hackerlogin />} />
          <Route path="/customerlogin" element={<Customerlogin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/penforpass" element={<Penforpass />} />
          <Route path="/comforpass" element={<Comforpass />} />
          <Route path="/cusignup" element={<Cusignup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
