import React from 'react'
import { Link } from 'react-router-dom';
function Penforpass(){
  return (
    <div className="desktops:max-w-full relative h-screen w-screen overflow-hidden">
      {/* Video background */}
      <video
        src="src\assets\login Gif.mp4"
        className="desktops:w-screen desktops:h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
        style={{ zIndex: -1 }}
      ></video>

      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-black opacity-60 z-0"></div>

      {/* Navbar */}
      <div className="absolute top-10 left-10 px-[142px] z-20">
        {/* Wrapping the image inside the Link component */}
        <Link to="/homepage" className="leading-5 tracking-widest">
          <h1 className="font-customsfuidisplay text-[20px] text-white">SENTINEL</h1>
          <h1 className="text-customPurple font-customsfuidisplaybold text-[20px]">
            SHIELD
          </h1>
        </Link>
      </div>

      {/* Form container */}
      <div className="absolute inset-0 flex flex-col items-center py-40 z-10">
        <h1 className="text-white pb-10 text-2xl font-customsfuidisplaybold">
          Reset Password
        </h1>
        <form
          className="text-white flex flex-col border rounded-lg px-10 py-10">
            <div className='flex flex-col'>
                <label htmlFor="" className="">Email</label>
                <input type="email" className="h-[27px] text-black mb-10 rounded" required/>
                <button className="bg-customPurple px-2 rounded">Send</button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Penforpass;