import { Link } from "react-router-dom";
export const Signup = () => {
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
      <div className="absolute top-0 left-0 px-[142px] py-8 z-10">
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
      <div className="absolute inset-0 flex flex-col items-center py-20 z-10">
        <div className="flex pr-[250px]">
          <h1 className="text-white pb-6 text-2xl font-customsfuidisplaybold">
            <span>Together, </span> <br />
            let's build a stronger 
            <span className="text-customPurple"> Fortress</span>
          </h1>
        </div>
        <form
          className="text-white flex flex-col border rounded-lg px-10 py-10"
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
              <span className="text-blue-500">Privacy Policy</span>
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
