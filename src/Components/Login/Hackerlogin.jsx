import { Link } from 'react-router-dom';

function Hackerlogin() {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <div className="text-white static">Sentinel</div>
      {/* Video background */}
      <video
        src="src/assets/login Gif.mp4" // Ensure this path is correct
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
      ></video>

      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Form container */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <h1 className="text-2xl font-bold pb-10">Login as Pentester</h1>
        <div className="flex pl-40 font-customsfuidisplaylight pr-6 pb-3">
          <h3 className="text-white flex flex-col">
            Don't have an account?
            <Link to="/Signup">
            <span className="text-blue-500 flex justify-end">
              Create an account
            </span></Link>
          </h3>
        </div>
        <form
          className="border rounded-lg p-10 bg-opacity-90"
          onSubmit={(e) => {
            e.preventDefault(); // Prevent default form submission
            // Add form handling logic here
          }}
        >
          <label className="block">Email</label>
          <input className="w-60 h-8 rounded text-black pl-2" type="email" required />

          <label className="block pt-4">Password</label>
          <input className="w-60 h-8 rounded text-black pl-2" type="password" required />

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
            Forgot your password? <Link to="/penforpass" className="text-blue-500">Reset Password</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hackerlogin;
