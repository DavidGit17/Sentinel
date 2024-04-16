import { Navbar } from "../Navbar";
export const Landingpage = () => {
  return (
    <div className="mx-auto overflow-hidden">
      <Navbar />
      <div className="flex justify-between w-screen bg-black pb-24 ">
        <div className="pl-5 pt-10 bg-black ">
          <p className="text-white text-5xl leading-[70px] tracking-widest font-customRoboto font-bold">
            UNLEASH YOUR <br />
            <span className="animated-text text-customPurple">
              INNER DETECTIVE
            </span>
            <br />
            BECOME A BUG BOUNTY <br />
            HUNTER
          </p>
        </div>
        <div className="pr-10 ">
          <img className="" src="src\assets\Hero-Banner.png"></img>
        </div>
      </div>
      <div className="bg-white h-fit text-black">
        <p className="pl-5 text-xl">How to Participate</p>
        <p className="pl-5 text-xl">
          Provides step-by-step instructions on how to join the bug bounty
          program <br/>and start hunting for bugs.
        </p>
      </div>
    </div>
  );
};
