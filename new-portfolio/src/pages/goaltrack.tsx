import React from "react";
import Image from "next/image";
import GTImage from "../../public/assets/goaltrackSS.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

function goaltrack() {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          fill
          style={{ objectFit: "cover" }}
          src={GTImage}
          alt={""}
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-[#A98743] z-10 pl-5">
          <h2 className="py-2 text-[#EFF6EE]">GoalTrack</h2>
          <h3>React JS / RapidAPI / cPanel</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-5 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p className="tracking-widest uppercase">Project</p>
          <h2 className="py-2 text-[#3C4F76] tracking-widest">Overview</h2>
          <p>
            GoalTrack is an up-to-date and functional web app that provides live
            scores, fixtures, results and statistics from all professional teams
            and leagues around the world. The app is written in TypeScript
            through the ReactJS library, and makes use of the FOOTBALL-API found
            via RapidAPI. The biggest challenge I faced while creating GoalTrack
            was deciding on the optimal way to call daily fixtures from the API,
            and the biggest break-through moment came when I figured out how to
            fetch data for multiple days at once and then create my own
            date-range-picker for users to browse the current weeks fixtures and
            results by day.
          </p>
          <Link
            href={"https://goaltrack.live"}
            rel="noopener noreferrer"
            target={"_blank"}
          >
            <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          </Link>
          <Link
            href={"https://github.com/kyljmk/goaltrack"}
            rel="noopener noreferrer"
            target={"_blank"}
          >
            <button className="bg-[#EFF6EE] border-2 border-[#A98743] text-[#A98743] px-8 py-2 mt-4">
              Code
            </button>
          </Link>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-[#AB9F9D] rounded-xl">
          <div className="p-3">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-[#3C4F76] py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React
              </p>
              <p className="text-[#3C4F76] py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> TypeScript
              </p>
              <p className="text-[#3C4F76] py-2 flex items-center pl-2 md:pl-0">
                <RiRadioButtonFill className="pr-1" /> cPanel
              </p>
              <p className="text-[#3C4F76] py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> RapidAPI
              </p>
            </div>
          </div>
        </div>
        <Link href={"/#projects"}>
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
}

export default goaltrack;
