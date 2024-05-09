import React from "react";
import { Link, useLocation } from "react-router-dom"; // Import useLocation

function Dashboard() {
  const location = useLocation(); // Get the current path for active tab indication

  return (
    <div className="py-5 px-[142px]">
      <div className="flex h-10 justify-between items-center font-customsfuidisplay">
        <div className="text-white leading-4">
          <Link to="/homepage">
            <p>
              SENTINEL
              <p className="text-customPurple font-bold">SHIELD</p>
            </p>
          </Link>
        </div>

        {/* Navigation with indication for active tab */}
        <div className="text-white bg-[#2D2D2D] rounded-[20px] h-10 flex items-center justify-center font-customsfuidisplay">
          <ul className="flex py-1 px-20 gap-10 text-[13px]">
            {[
              { name: "Dashboard", path: "/dashboard" },
              { name: "Programs", path: "/programs" },
              { name: "Submission", path: "/submission" },
              { name: "Work", path: "/work" },
              { name: "Payments", path: "/payments" },
              { name: "Leaderboards", path: "/leaderboards" },
            ].map((tab) => (
              <Link key={tab.path} to={tab.path}>
                <li
                  className={`${
                    location.pathname === tab.path
                      ? "text-customPurple" // Active tab styling
                      : "hover:text-customPurple" // Hover effect for inactive tabs
                  }`}
                >
                  {tab.name}
                </li>
              </Link>
            ))}
          </ul>
        </div>

        <div className="border h-10 w-10 rounded-full border-transparent">
          <img
            src="src/assets/make_a_logo_named_SENTINEL_SHIELD_and_merge_se 1.png"
            alt="Logo"
          />
        </div>
      </div>
      <div className="flex pt-20 h-fit gap-7">
        <div className="border w-[400px] h-[350px] rounded-3xl">
          <div className="">
            <img src="src\assets\ben-sweet-2LowviVHZ-E-unsplash 1.png" alt="" />
          </div>
          <div className="bg-[#111111] pb-10 rounded-3xl">
            <div className="text-white flex justify-between px-5 font-customsfuidisplaylight">
              <p>Resolved reports</p>
              <p>0%</p>
            </div>
            <div className="border mx-5 h-2.5  bg-gray-200 mt-4">
              <div className="border h-2 w-3 bg-customPurple"></div>
            </div>
            <div className="text-white flex justify-between px-5 pt-10">
              <div>
                <p>Low</p>
                <p className="flex items-center justify-center pt-3">0</p>
              </div>
              <div>
                <p>Medium</p>
                <p className="flex items-center justify-center pt-3">0</p>
              </div>
              <div>
                <p>High</p>
                <p className="flex items-center justify-center pt-3">0</p>
              </div>
              <div>
                <p>Critical</p>
                <p className="flex items-center justify-center pt-3">0</p>
              </div>
            </div>
          </div>
        </div>
        <div className="border w-screen h-[560px] rounded-3xl px-10 py-6 bg-[#c1c1c122]">
          <div className="text-white font-customsfuidisplaybold text-2xl">
            <p>Rewards</p>
          </div>
          <div className="text-white font-customsfuidisplaybold flex gap-80">
            <div className="leading-5">
              <p>
                Last 30 <br />
                Days
              </p>
              <p className="pt-2 text-[20px]">$ 0.00</p>
            </div>
            <div className="leading-5">
              <p>
                Last 30 <br />
                Days
              </p>
              <p className="pt-2 text-[20px]">$ 0.00</p>
            </div>
          </div>
          <div className="flex gap-5 flex-col">
              <div className="border w-16 h-10"></div>
              <div className="border w-16 h-10"></div>
              <div className="border w-16 h-10"></div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
