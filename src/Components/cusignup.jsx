import { Link } from "react-router-dom";
export const Cusignup = () => {
  return (
    <div className="desktops:max-w-full relative h-[] w-screen overflow-hidden">
      {/* Video background */}
      <video
        src="src\assets\1110751_Animation_Blurred_Glitter_1920x1080 (1).mp4"
        className="desktops:w-screen desktops:h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
        style={{ zIndex: -1 }}
      ></video>

      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-black opacity-80 z-0"></div>

      {/* Navbar */}
      <div className="absolute top-0 left-0 px-[142px] py-10 z-10">
        {/* Wrapping the image inside the Link component */}
        <Link to="/homepage" className="leading-5 tracking-widest">
          <h1 className="font-customsfuidisplay text-[20px] text-white">
            SENTINEL
          </h1>
          <h1 className="text-customPurple font-customsfuidisplaybold text-[20px]">
            SHIELD
          </h1>
        </Link>
      </div>

      {/* Form container */}
      <div className="absolute inset-0 flex flex-col items-center pt-40 z-10 ">
        <div className="flex pr-[120px]">
          <h1 className="text-white pb-2  text-2xl font-customsfuidisplaybold text-[20px] leading-tight">
            Partner with us for a safer digital future. <br/>Your security, our
            <span className="text-customPurple"> mission.</span>
          </h1>
        </div>
        <form
          className="text-white flex flex-col border rounded-lg px-10 pt-10 pb-6 text-[12px]"
          onClick={<Homepage />}
        >
          <div className="flex flex-row pb-8 gap-14">
            <div className="flex flex-col font-customInter font-extralight">
              <label htmlFor="">Your Name</label>
              <input type="text" id="" className="py-1 h-7 rounded" />
            </div>
            <div className="flex flex-col font-customInter font-extralight">
              <label htmlFor="">Username</label>
              <input type="text" id="" className="py-1 h-7 rounded" />
            </div>
          </div>
          <div className="flex flex-col pb-8 font-customInter font-extralight">
            <label htmlFor="">Email</label>
            <input type="text" id="" className="py-1 h-7 rounded" />
          </div>
          <div className="flex flex-col pb-8 font-customInter font-extralight">
            <label htmlFor="">Company Name</label>
            <input type="text" id="" className="py-1 h-7 rounded" />
          </div>
          <div className="flex flex-col pb-8 font-customInter font-extralight">
            <label htmlFor="">Mobile Number</label>
            <input type="text" id="" className="py-1 h-7 rounded" />
          </div>
          <div className="flex flex-col pb-8 font-customInter font-extralight">
            <label htmlFor="">Password</label>
            <input type="text" id="" className="py-1 h-7 rounded" />
          </div>
          <div className="flex flex-col pb-8 font-customInter font-extralight">
            <label htmlFor="">Confirm Password</label>
            <input type="text" id="" className="py-1 h-7 rounded" />
          </div>
          <div className="flex items-center pb-8">
            <input type="checkbox" />
            <p className="pl-2 text-[10px]">
              I agree to the
              <span className="text-blue-500">Terms & Conditions</span> and
              <span className="text-blue-500"> Privacy Policy</span>
            </p>
          </div>
          <div className="bg-customPurple rounded flex justify-center mx-20 py-1 font-customsfuidisplaybold">
            <button>SignUp</button>
          </div>
        </form>
      </div>
    </div>
  );
};
