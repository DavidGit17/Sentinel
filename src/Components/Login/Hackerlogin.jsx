import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Dashboard from '../Dashboard';

function Hackerlogin() {
  const navigate = useNavigate(); // Initialize navigate hook

  const handleFormSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    navigate('/dashboard'); // Navigate to Dashboard after successful login
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {/* Video background */}
      <video
        src="src/assets/login Gif.mp4" // Ensure this path is correct
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
      ></video>

      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-black opacity-60 z-10"></div>

      {/* Form container */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-20"> {/* High z-index to stay above the overlay */}
        
        {/* Company name on the left side */}
        <div className="absolute top-10 left-10 px-[142px]"> {/* Position company name on the top left */}
          <Link to="/homepage" className="text-white no-underline text-[20px] leading-5">
            <p className="font-customsfuidisplaybold">SENTINEL</p>
            <p className="font-customsfuidisplay font-semibold text-customPurple">SHIELD</p>
          </Link>
        </div>

        <h1 className="text-2xl font-bold pb-2">Login as Pentester</h1>
        <div className="pt-5 text-right w-screen flex justify-center pl-[150px]">
          <p>
            Don't have an account? 
            <Link to="/signup" className="text-blue-500"><p>Create an account</p></Link>
          </p>
        </div>
        <form
          className="border rounded-lg p-10 bg-opacity-90"
          onSubmit={handleFormSubmit} // Form submission handler
        >
          <label className="block">Email</label>
          <input
            className="w-60 h-8 rounded text-black pl-2"
            type="email"
            required
          />

          <label className="block pt-4">Password</label>
          <input
            className="w-60 h-8 rounded text-black pl-2"
            type="password"
            required
          />

          <div className="flex items-center pt-5 pb-7">
            <input type="checkbox" className="rounded" />
            <p className="pl-2">Remember me</p>
          </div>

          <button
            type="submit"
            className="bg-customPurple text-white rounded px-24 py-1"
          >
            Log in
          </button>
        </form>

        <div className="pt-5">
          <p>
            Forgot your password? 
            <Link to="/penforpass" className="text-blue-500"> Reset Password</Link>
          </p>
        </div>

        
      </div>
    </div>
  );
}

export default Hackerlogin;
