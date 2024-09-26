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
          <Link>
            <img
              src="src/assets/make_a_logo_named_SENTINEL_SHIELD_and_merge_se 1.png"
              alt="Logo"
            />
          </Link>
        </div>
      </div>
      <div className=" h-[1500px] flex gap-14">
        <div className=" w-[300px] h-fit my-[110px] flex flex-col justify-center gap-10">
          <div className="border h-[400px] rounded-3xl flex flex-col">
            <div>
              <img
                src="src\assets\ben-sweet-2LowviVHZ-E-unsplash 1.png"
                alt=""
              />
            </div>
            <div>
              <p className="text-white font-customsfuidisplaybold flex justify-center h-10">
                David. B
              </p>
            </div>
            <div className=""></div>
            <div className="flex flex-col gap-5 bg-[#1a1a1a] rounded-3xl pt-5 h-full">
              <div className="text-white flex justify-between px-4 font-customsfuidisplaybold ">
                <p className="text-white">Resolved reports</p>
                <p>0%</p>
              </div>
              <div className="px-4">
                <div className=" h-2.5 bg-white">
                  <div className="h-2.5 w-[10px] bg-customPurple"></div>
                </div>
              </div>
              <div className="w-full">
                <div className=" text-white flex justify-between px-4">
                  <div>
                    <p>Low</p>
                  </div>
                  <div>
                    <p>Medium</p>
                  </div>
                  <div>
                    <p>High</p>
                  </div>
                  <div>
                    <p>Critical</p>
                  </div>
                </div>
              </div>
              <div className="text-white w-full flex justify-center gap-16">
                <div>
                  <p>0</p>
                </div>
                <div>
                  <p>0</p>
                </div>
                <div>
                  <p>0</p>
                </div>
                <div>
                  <p>0</p>
                </div>
              </div>
            </div>
          </div>
          <div className="border h-[400px] rounded-3xl">
            <div className="flex justify-center gap-4 pt-5">
              <div>
                <img src="src\assets\graph 1.png" alt="" />
              </div>
              <div>
                <p className="text-white font-customsfuidisplaybold text-[20px]">
                  Activity
                </p>
              </div>
            </div>
            <div className="px-5 gap-5 flex flex-col pt-10">
              <img src="src\assets\Group 19.png" alt="" />
              <img src="src\assets\Group 19.png" alt="" />
              <img src="src\assets\Group 19.png" alt="" />
            </div>
          </div>
          <div className="border h-[400px] rounded-3xl flex flex-col items-center pt-10">
            <div>
              <img
                src="src\assets\marketing (1) 1.png"
                className="h-10"
                alt=""
              />
            </div>
            <div>
              <p className="text-white font-customsfuidisplaybold pb-10">
                Announcements
              </p>
            </div>
            <div className="px-5 flex flex-col gap-14">
              <div>
                <img src="src\assets\Rectangle 2718.png" alt="" />
              </div>
              <div>
                <img src="src\assets\Rectangle 2719.png" alt="" />
              </div>
              <div>
                <img src="src\assets\Rectangle 2720.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className=" w-[900px] my-[110px] h-fit flex flex-col gap-10">
          <div className="border h-[550px] rounded-3xl text-white font-customsfuidisplaybold px-10 py-10 flex flex-col">
            <div>
              <div>
                <p className="text-xl pb-10">Rewards</p>
              </div>
              <div className="flex gap-80">
                <div>
                  <div>
                    <p className="text-white">
                      Last 30 <br />
                      Days
                    </p>
                  </div>
                </div>
                <div>
                  <div>
                    <p className="text-white">Reports Submitted</p>
                  </div>
                  <div className="">
                    <p className="text-white">0</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-white bg-[#3F3F3F]  h-[260px] mt-12 pt-7">
              <div className="flex">
                <div className="bg-[#F8F8F8] border rounded-md h-[130px] w-[50%] mx-20 flex flex-col justify-center items-end pr-2 gap-5">
                  <div className="border bg-[#3F3F3F] h-2.5 w-10"></div>
                  <div className="border bg-[#3F3F3F] h-2.5 w-40"></div>
                  <div className="border bg-[#3F3F3F] h-2.5 w-20"></div>
                </div>
                <div className="bg-[#7D7D7D] border h-[130px] rounded-md  w-[50%] mx-20 flex flex-col items-end justify-center gap-5 border-transparent">
                  <div className="border bg-[#3F3F3F] h-2.5 w-10 border-transparent"></div>
                  <div className="border bg-[#3F3F3F] h-2.5 w-40 border-transparent"></div>
                  <div className="border bg-[#3F3F3F] h-2.5 w-20 border-transparent"></div>
                </div>
              </div>
              <div className="flex flex-col items-center pt-5">
                <div>
                  <p>You haven't submitted any report</p>
                </div>
                <div>
                  <p className="text-[#ABABAB]">
                    When you submit reports or gain access to an program,
                    they'll appear here.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="border h-fit rounded-3xl">
            <div>
              <img src="src\assets\owasp.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
