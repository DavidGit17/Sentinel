import { useState } from "react";
import { Navbar } from "../Navbar";
import { Link } from "react-router-dom";
import { WhySentinel } from "./WhySentinel";
export const Landingpage = () => {
  return (
    <div className="mx-auto overflow-hidden font-customRoboto">
      <div class="relative h-screen">
        <video
          autoPlay
          muted
          loop
          className="absolute w-full h-full object-cover"
          src="src\assets\6346217-uhd_4096_2160_25fps (1).mp4"
        ></video>
        <div class="absolute w-full h-full bg-black opacity-50"></div>
        <div class="absolute inset-0 flex flex-col items-center justify-center">
          <p class="text-white text-[55px] font-bold font-customsfuidisplaybold text-center">
            Securing Your Digital Frontier
          </p>
          <p className="text-white text-[18px] font-light font-customsfuidisplaylight text-center">
            Submit and manage vulnerability reports for unprotected businesses.
          </p>
          <div className="flex gap-10 pt-16">
            <Link
              to="homepage"
              className="text-white border border-white rounded-md px-2 py-[2px] bg-customGreynav"
            >
              Learn more
            </Link>
            <Link
              to="contact"
              className="text-white rounded-md px-2 py-[2px] bg-customPurple"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-white h-screen w-screen text-black px-[142px] pt-10">
        <p className="text-5xl font-customsfuidisplaybold pb-5 tracking-tight">
          How to Participate
        </p>
        <p className=" text-md pl-1 font-customsfuidisplaylight">
          Provides step-by-step instructions on how to join the bug bounty
          program <br />
          and start hunting for bugs.
        </p>
        <div className="pt-14">
          <ul className="flex items-center">
            <li className="h-12 w-12 bg-black text-white py-1 px-3 rounded-full flex justify-center items-center text-[23px] align-middle">
              1
            </li>
            <li className="border border-black w-[300px] h-fit"></li>
            <li className="h-12 w-12 bg-black text-white py-1 px-3 rounded-full flex justify-center items-center text-[23px] align-middle">
              2
            </li>
            <li className="border border-black w-[300px] h-fit"></li>
            <li className="h-12 w-12 bg-black text-white py-1 px-3 rounded-full flex justify-center items-center text-[23px] align-middle">
              3
            </li>
            <li className="border border-black w-[300px] h-fit"></li>
            <li className="h-12 w-12 bg-black text-white py-1 px-3 rounded-full flex justify-center items-center text-[23px] align-middle">
              4
            </li>
            <li className="border border-black w-[300px] h-fit"></li>
            <br />
          </ul>
          <div className="flex pt-5 px-6">
            <div className="pr-[7rem] bg-[#f0f0f0] mr-2 w-fit rounded">
              <p className="text-black font-bold text-2xl text-justify leading-6 truncate">
                Step 1: Sign up for
                <br />
                the bug bounty
                <br />
                program
                <br />
                <div className="pb-3"></div>
                <span className="text-black text-sm font-normal ">
                  Visit our website and create an
                  <br />
                  account to become a member
                  <br />
                  of our bug bounty program.
                </span>
              </p>
            </div>
            <div className="pr-[7rem]  bg-[#f0f0f0] mr-2 w-fit rounded">
              <p className="text-black font-bold text-2xl text-justify leading-6 truncate">
                Step 2: Familiarize
                <br />
                yourself with the
                <br />
                program guidelines
                <br />
                <div className="pb-3"></div>
                <span className=" line text-black text-sm font-normal">
                  Read and understand the
                  <br />
                  guidelines and rules of our bug
                  <br /> bounty program to ensure you
                  <br />
                  adhere to the requirements.
                </span>
              </p>
            </div>
            <div className="pr-[8rem] bg-[#f0f0f0] mr-2 w-fit rounded">
              <p className="text-black font-bold text-2xl text-justify leading-6 truncate">
                Step 3: Start
                <br />
                hunting for bugs
                <br />
                <div className="pb-3"></div>
                <span className=" line text-black text-sm font-normal">
                  Explore our applications and
                  <br />
                  systems to identify potential
                  <br /> vulnerabilities and security
                  <br />
                  flaws. Report any findings
                  <br />
                  following the bug bounty <br />
                  program's reporting process.
                </span>
              </p>
            </div>
            <div className="bg-[#f0f0f0] mr-2 w-fit rounded">
              <p className="text-black font-bold text-2xl leading-6 truncate">
                Step 4: Earn rewards
                <br />
                <div className="pb-3"></div>
                <span className=" line text-black text-sm font-normal">
                  Receive rewards and
                  <br />
                  recognition for valid bug <br />
                  submissions based on the <br />
                  severity and impact of the <br />
                  reported vulnerabilities.
                  <br />
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="pt-10 bg-[#f0f0f0]  rounded">
          <ul className="flex items-center">
            <li className="h-12 w-12 bg-black text-white py-1 px-3 rounded-full flex justify-center items-center text-[23px] align-middle">
              5
            </li>
            <li className="border border-black w-[14in] h-fit"></li>
          </ul>
          <div className="px-6 pt-5">
            <p className="text-black font-bold text-2xl ">
              Step 5: Stay engaged
              <br />
              <span className=" line text-black text-sm font-normal ">
                Continue participating in the bug bounty program, stay updated
                with new targets, and contribute to the security of our systems.
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="bg-black h-fit  text-white py-40 flex font-customsfuidisplay justify-center">
        <div className="flex flex-col items-center justify-center max-w-fit">
          <p className="pb-10 text-4xl font-bold">
            WHAT IS SHIELD SOURCED SECURITY ?
          </p>
          <p className="ssst font-customsfuidisplaylight tracking-wide text-justify px-80 text-[20px]">
            In today's ever-evolving threat landscape, a reactive security
            approach simply isn't enough. Sentinel Shield is an innovative bug
            bounty platform that empowers you to take a proactive approach to
            securing your digital assets. Our platform connects you with a
            community of ethical hackers who can help identify and address
            vulnerabilities before malicious actors can exploit them. Sentinel
            Shield fosters a collaborative environment that helps you strengthen
            your defenses and build a culture of security within your
            organization.
          </p>
        </div>
      </div>
      <div className="h-fit bg-white flex justify-between items-center px-[142px] py-28">
        <div className="flex flex-col w-fit">
          <p className="text-gray-400 pb-3">Secure Your Software</p>
          <p className="text-black font-bold text-3xl pb-3">
            Discover and report vulnerabilities <br />
            responsibly.
          </p>
          <p className="text-gray-600 pb-7">
            Join our platform to help companies enhance their cybersecurity by
            <br />
            identifying potential security threats.
          </p>
          <button className="button1 py-2 px-4 w-fit mb-10">
            Get Started Now
          </button>
          <Link to="hackerlogin">
            Log in here.
            <Link>
              <span className="text-customPurple font-bold">
                Sign in today.
              </span>
            </Link>
          </Link>
        </div>
        <div className="w-fit">
          <img src="src\assets\m_image.png" className="h-80 rounded-md"></img>
        </div>
      </div>
      <div className="h-screen bg-[#1A1A1A] flex justify-center py-28">
        <div className="flex flex-col">
          <div className="text-center flex flex-col pb-14 font-customsfuidisplaybold">
            <p className="text-[#B3B3B3]">Secure Vulnerability Reporting</p>
            <p className="text-white text-[30px]">
              Discover Hidden Vulnerabilities Easily
            </p>
          </div>
          <div className="container text-white flex justify-center text-center">
            <div className="row pr-10">
              <div className="col pb-14">
                <img
                  src="src\assets\lightning.png"
                  className="pb-10 pl-[150px]"
                ></img>
                <h1 className="font-customsfuidisplaybold">Private Reports</h1>
                <h1 className="font-customsfuidisplaylight">
                  Submit vulnerability reports anonymously to
                  <br />
                  companies without public bounty programs.
                </h1>
              </div>
              <div className="col">
                <img
                  src="src\assets\community.png"
                  className="pb-10 pl-[150px]"
                ></img>
                <h1 className="font-customsfuidisplaybold">Expert Community</h1>
                <h1 className="font-customsfuidisplaylight">
                  Join a community of expert pentesters <br />
                  sharing knowledge and resources.
                </h1>
              </div>
            </div>
            <div className="row pr-10">
              <div className="col pb-14">
                <img
                  src="src\assets\rewards.png"
                  className="pb-10 pl-[150px]"
                ></img>
                <h1 className="font-customsfuidisplaybold">Real Rewards</h1>
                <h1 className="font-customsfuidisplaylight">
                  Earn rewards and recognition from <br />
                  companies for your valuable security insights.
                </h1>
              </div>
              <div className="col">
                <img
                  src="src\assets\response.png"
                  className="pb-10 pl-[150px]"
                ></img>
                <h1 className="font-customsfuidisplaybold">Fast Response</h1>
                <h1 className="font-customsfuidisplaylight">
                  Receive quick feedback from companies <br />
                  regarding your submitted reports.
                </h1>
              </div>
            </div>
            <div className="row">
              <div className="col pb-14">
                <img
                  src="src\assets\globalaccess.png"
                  className="pb-10 pl-[150px]"
                ></img>
                <h1 className="font-customsfuidisplaybold">Global Access</h1>
                <h1 className="font-customsfuidisplaylight">
                  Access our platform from anywhere, <br />
                  providing a global solution for pentesters.
                </h1>
              </div>
              <div className="col">
                <img
                  src="src\assets\secure.png"
                  className="pb-10 pl-[150px]"
                ></img>
                <h1 className="font-customsfuidisplaybold">Secure Interface</h1>
                <h1 className="font-customsfuidisplaylight">
                  Utilize a secure and user-friendly interface <br />
                  for submitting your reports safely.
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <WhySentinel />
      <div className="bg-[#1A1A1A] h-fit flex justify-between px-[142px] pt-28">
        <div className="h-fit">
          <Link to="/homepage" className="leading-5 tracking-widest">
            <h1 className="font-customsfuidisplay text-[20px] text-white">
              SENTINEL
            </h1>
            <h1 className="text-customPurple font-customsfuidisplaybold text-[20px]">
              SHIELD
            </h1>
          </Link>
        </div>
        <div className="text-white flex gap-[100px] font-customInter items-center">
          <div className="flex flex-col gap-5">
            <div className="text-[#B3B3B3]">Features</div>
            <div className="font-md">Secure Reporting</div>
            <div className="font-md">Real-Time Alerts</div>
            <div className="font-md">Analytics Dashboard</div>
            <div className="font-md">Collaboration Tools</div>
            <div className="font-md">Full Anonymity</div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="text-[#B3B3B3]">Services</div>
            <div className="font-md">Consulting</div>
            <div className="font-md">Training</div>
            <div className="font-md">Reports</div>
            <div className="font-md">Monitoring</div>
            <div className="font-md">Testing</div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="text-[#B3B3B3]">About</div>
            <div className="font-md">Our Mission</div>
            <div className="font-md">Vision</div>
            <div className="font-md">History</div>
            <div className="font-md">Team</div>
            <div className="font-md">Careers</div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="text-[#B3B3B3]">Follow</div>
            <div className="font-md">Twitter</div>
            <div className="font-md">Facebook</div>
            <div className="font-md">LinkedIn</div>
            <div className="font-md">Instagram</div>
            <div className="font-md">YouTube</div>
          </div>
        </div>
      </div>
      <div className="text-white bg-[#1A1A1A] flex justify-center h-fit pt-10 items-center pb-20 pl-[180px]">
        <div className="flex flex-col ">
        <h1 className="">Sentinel Shield Inc.</h1>
        <p>&copy; 2024 Sentinel Shield Inc. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Landingpage;