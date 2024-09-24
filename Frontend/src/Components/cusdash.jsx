import React from "react";
import { Link } from "react-router-dom";
function Cusdash() {
  return (
    <div className="bg-white h-[1920px]">
      <div className="bg-black h-14 flex justify-between px-2 items-center">
        <Link to="/homepgae">
          <p className="text-white font-customsfuidisplay leading-4">
            SENTINEL <br />
            <p className="font-customsfuidisplaybold text-customPurple">
              SHIELD
            </p>
          </p>
        </Link>
        <div className="">
          <div className="h-8 w-80 bg-[#191919] text-[#605F5F]">
            Go to Security Programs
          </div>
        </div>
        <div className="text-white flex gap-5">
          <Link to="/">
            <p className="font-customsfuidisplaybold">Dashboard</p>
          </Link>
          <p className="font-customsfuidisplaybold">Organization</p>
        </div>
        <div className="border h-8 w-8 rounded-full">
          <img
            src="src\assets\make_a_logo_named_SENTINEL_SHIELD_and_merge_se 1.png"
            alt=""
          />
        </div>
      </div>
      <div className="bg-[#F0F0F0] h-80 ">
        <div className="border border-[#a8a8a8] pt-14 flex gap-10 px-28 ">
          <Link to="/cusdash">
            <p className="border border-b-customPurple ">
              What's new <p className=""></p>
            </p>
          </Link>

          <Link to="/custasks">
            <p className="">Tasks</p>
          </Link>
        </div>
        <div className="font-customsfuidisplay px-28 p-10">
          <p>Microsoft,</p>
          <p className="font-customsfuidisplaybold text-2xl">
            Good Morning, David
          </p>
        </div>
        <div className="px-28 pt-40 ">
          <p className="font-customsfuidisplaybold text-lg">Programs</p>
          <div className="flex">
            <img src="src\assets\Group 115.png" alt="" />
            <img
              src="src\assets\Screenshot 2024-05-10 100749.png"
              className="w-60 h-80"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cusdash;
