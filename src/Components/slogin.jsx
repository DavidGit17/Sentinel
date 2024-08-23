import React from 'react';
import { Link,useNavigate } from "react-router-dom";
import { useState } from "react";
import toast from 'react-hot-toast';

function Slogin() {
  const navigate = useNavigate(); // Initialize navigate hook
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')


  const handleFormSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    const data =JSON.parse(localStorage.getItem('hacker'))
    console.log(data)

    if(data!==null) {
      if(data.email == email && data.password == password ) {
        toast.success('Login Successful')
        navigate('/dashboard');
      }
    }
    else {
      toast.error('User not found, Please Register')
    }
  
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {/* Video background */}
      
      {/* Form container */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-20"> {/* High z-index to stay above the overlay */}
        

        <h1 className="text-2xl font-normal pb-2">Login</h1>
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
           
            value={email}
            onChange={(e)=>{setEmail(e.target.value)}}
            required
          />

          <label className="block pt-4">Password</label>
          <input
            className="w-60 h-8 rounded text-black pl-2"
            type="password"
            value={password}
            onChange={(e)=>{setPassword(e.target.value)}}
            required
          />

          <div className="flex items-center pt-5 pb-7">
            <input type="checkbox" className="rounded" />
            <p className="pl-2">Remember me</p>
          </div>

          <button
            type="submit"
            className="bg-white text-black rounded px-24 py-1"
          >
            Log in
          </button>
        </form>

        {/* <div className="pt-5">
          <p>
            Forgot your password? 
            <Link to="/penforpass" className="text-blue-500"> Reset Password</Link>
          </p>
        </div> */}

        
      </div>
    </div>
  );
}

export default Slogin;
