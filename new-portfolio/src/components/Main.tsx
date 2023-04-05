import React from "react";

function Main() {
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-4 flex justify-center items-center">
        <div className="text-[#383F51]">
          <p className="text-sm tracking-widest py-2">
            <span className="uppercase">
              "Experience is the name everyone gives to their mistakes"
            </span>
            &nbsp;-&nbsp;Oscar&nbsp;Wilde
          </p>
          <div className="flex flex-col items-center">
            <div className="bg-[#3C4F76] rounded-full h-11 w-[370px] sm:h-14 absolute z-[-1] animate-slide-in-left"></div>
            <div className="bg-[#3C4F76] rounded-full h-11 w-[340px] mt-12 sm:mt-16 sm:h-14 absolute z-[-1] animate-slide-in-right"></div>
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
        </div>
      </div>
    </div>
  );
}

export default Main;
