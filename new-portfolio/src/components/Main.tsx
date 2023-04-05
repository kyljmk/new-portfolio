import React from "react";
import { AiOutlineLinkedin } from "react-icons/ai";
import { BsPersonLinesFill } from "react-icons/bs";
import { FaLinkedin, FaLinkedinIn } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { VscGithub } from "react-icons/vsc";

function Main() {
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto pt-32 sm:pt-20 p-4 flex justify-center items-center">
        <div className="text-[#383F51]">
          <p className="text-sm tracking-widest pb-5">
            <span className="uppercase">
              "Experience is the name everyone gives to their mistakes"
            </span>
            &nbsp;-&nbsp;Oscar&nbsp;Wilde
          </p>
          <div className="flex flex-col items-center">
            <div className="bg-[#3C4F76] rounded-full h-11 sm:h-[52px] md:h-16 w-[380px] sm:w-[500px] md:w-[620px] absolute sm:mt-1 z-[-1] animate-slide-in-left"></div>
            <div className="bg-[#3C4F76] rounded-full h-11 sm:h-12 md:h-[60px] w-[340px] sm:w-[440px] md:w-[530px] mt-12 sm:mt-[59px] md:mt-[71px] absolute z-[-1] animate-slide-in-right"></div>
            <h1 className="tracking-widest py-1 text-[#A98743]">
              My name is
              <span className="text-[#EFF6EE]"> Kyle</span>
            </h1>
            <h1 className="text-[#EFF6EE] tracking-widest py-1">
              Manson&#8209;Kullin
            </h1>
            <h1 className="tracking-widest py-1">I'm a full stack</h1>
            <h1 className="tracking-widest py-1">developer.</h1>
          </div>
          <p className="py-4 max-w-[80%] m-auto tracking-wider">
            I am a hard-working and curious full stack developer with
            professional experience in backend .NET development (C#, ASP.NET
            WebAPI, RestAPI, Entity Framework Core, SQL Server, LINQ, Azure,
            GitHub Actions) and a personal portfolio that includes projects
            which use technologies such as JavaScript, TypeScript, React,
            NextJS, React Native, ExpressJS, Firebase and TailwindCSS.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-[#3c4f76] p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <FaLinkedinIn size="" />
            </div>
            <div className="rounded-full shadow-lg shadow-[#3c4f76] p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <VscGithub />
            </div>
            <div className="rounded-full shadow-lg shadow-[#3c4f76] p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <FiMail />
            </div>
            <div className="rounded-full shadow-lg shadow-[#3c4f76] p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <BsPersonLinesFill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
