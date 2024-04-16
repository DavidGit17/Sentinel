import { Link } from "react-router-dom";
import { Homepage } from "../Homepage";
export const Hackerlogin = () => {
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
        <Link to="/">
          <img
            className="h-[64px] w-[90px]"
            src="src\assets\Sen filled png.png"
            alt="Logo"
          />
        </Link>
      </div>

      {/* Form container */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pb-96 ">
        <h1 className="text-white">Login as Pentester</h1>
        <div className="flex justify-end">
          <h3 className="text-white flex flex-col">
            Don't have an account?
            <span className="text-blue-500 flex justify-end">
              Create an account
            </span>
          </h3>
        </div>
        <form
          className="text-white flex flex-col border px-40 "
          onClick={<Homepage />}
        >
          <h3>Email</h3>
          <input className="" />
          <h3>Password</h3>
          <input className="" />
          <div>
            <input type="checkbox" />
            <> Remember me</>
          </div>
          <button type="submit">Log in</button>
          <div>
            <h3>Forgot your password?<span>Reset Password</span></h3>
          </div>
        </form>
      </div>
    </div>
  );
};
