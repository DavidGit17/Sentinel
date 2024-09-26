import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
function Signup(){
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
    localStorage.setItem('hacker', JSON.stringify(formData))
    toast.success('Signup Successful')
    navigate.push('/hackerignin')
  }


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
      <div className="absolute top-10 left-10 px-[142px] z-30">
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
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-20 pt-20">
        <div className="flex pr-[250px]">
          <h1 className="text-white pb-6 text-2xl font-customsfuidisplaybold">
            <span>Together, </span> <br />
            let's build a stronger 
            <span className="text-customPurple"> Fortress</span>
          </h1>
        </div>
        <form
          className="text-white flex flex-col border rounded-lg px-10 py-10"
        >
          <div className="flex flex-row pb-8 gap-14">
            <div className="flex flex-col font-customInter font-extralight">
              <label htmlFor="">Your Name</label>
              <input type="text" id="" className="text-black py-1 h-7 rounded"  required name="name" value={formData.name} onChange={handleChange} />
            </div>
            <div className="flex flex-col font-customInter font-extralight">
              <label htmlFor="">Username</label>
              <input type="text" id="" className="text-black py-1 h-7 rounded"  required name="username" value={formData.username} onChange={handleChange}/>
            </div>
          </div>
          <div className="flex flex-col pb-8 font-customInter font-extralight">
            <label htmlFor="">Email</label>
            <input type="text" id="" className="text-black py-1 h-7 rounded"  required name="email" value={formData.email} onChange={handleChange}/>
          </div>
          <div className="flex flex-col pb-8 font-customInter font-extralight">
            <label htmlFor="">Password</label>
            <input type="text" id="" className="text-black py-1 h-7 rounded"  required name="password" value={formData.password} onChange={handleChange}/>
          </div>
          <div className="flex flex-col pb-8 font-customInter font-extralight">
            <label htmlFor="">Confirm Password</label>
            <input type="text" id="" className="text-black py-1 h-7 rounded"  required name="confirmPassword" value={formData.confirmPassword} onChange={handleChange}/>
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
            <button onClick={handleSubmit} className="px-40">SignUp</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;