import React from "react";

function Profile() {
  return (
    <div className="flex flex-col gap-4 bg-[#121212] w-fit py-6 px-10 rounded">
      <div className="border h-8 w-8 rounded-full flex">
        <img src="src\assets\Asset 4 2.png" alt="" />
        <p className="text-white">David.B</p>
      </div>
      <div className="text-white w-fit">
        <p>Profile</p>
        <p>Account settings</p>
        <p>Support</p>
      </div>
      <div></div>
      <div className="text-white"><p className="bg-[#B72A2A] w-fit rounded px-5">Logout</p></div>
    </div>
  );
}

export default Profile;
