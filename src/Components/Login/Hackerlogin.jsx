import { Link } from "react-router-dom";
export const Hackerlogin = () =>{
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
      <div className="absolute top-0 left-0 p-5 z-10">
        {/* Wrapping the image inside the Link component */}
        <Link to="/homepage" className="leading-5 tracking-widest">
          <h1 className="font-customsfuidisplay text-[20px] text-white">SENTINEL</h1>
          <h1 className="text-customPurple font-customsfuidisplaybold text-[20px]">
            SHIELD
          </h1>
        </Link>
      </div>

      {/* Form container */}
      <div className="absolute inset-0 flex flex-col items-center py-20 z-10">
        <h1 className="text-white pb-10 text-2xl font-customsfuidisplaybold">
          Login as Pentester
        </h1>
        <div className="flex pl-40 font-customsfuidisplaylight pr-6 pb-3">
          <h3 className="text-white flex flex-col">
            Don't have an account?
            <Link to="">
            <span className="text-blue-500 flex justify-end">
              Create an account
            </span></Link>
          </h3>
        </div>
        <form
          className="text-white flex flex-col border rounded-lg px-10"
          onClick={<Homepage />}
        >
          <label className="pt-16">Email</label>
          <input className="w-60 h-7 rounded text-black pl-2" required />
          <label className="pt-7">Password</label>
          <input className="w-60 h-7 rounded pl-2 text-black" required />
          <div className="flex items-center pt-5 pb-7">
            <input type="checkbox" className="rounded"/>
            <p className="pl-1">Remember me</p>
          </div>
          <button type="submit" className=" bg-customPurple rounded font-customsfuidisplaylight text-sm py-1">Log in</button>
          <div className="pt-3 pb-14">
            <p className="text-[10px]">
              Forgot your password? <Link to="/penforpass"><span className="text-blue-500">Reset Password</span></Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};