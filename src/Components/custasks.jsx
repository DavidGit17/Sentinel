import React from "react";
import { Link } from "react-router-dom";
function Custasks() {
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
      <div className="bg-[#F0F0F0] h-24 ">
        <div className=" pt-14 flex gap-10 px-28 ">
          <Link to="/cusdash">
            <p className="">
              What's new <p className=""></p>
            </p>
          </Link>
          <Link to="/custasks">
            <p className="border border-b-customPurple  w-14">Tasks</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Custasks;
