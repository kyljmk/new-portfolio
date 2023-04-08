import React from "react";

function Projects() {
  return (
    <div className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#3C4F76]">
          Projects
        </p>
        <div className="flex justify-center">
          <div className="absolute mt-[10px] h-12 w-[290px] bg-[#3C4F76] rounded-full z-[-1] animate-slide-in-right"></div>
          <h2 className="py-4 text-[#EFF6EE]">What I've Built</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-[#AB9F9D] rounded-xl p-4 group hover:bg-gradient-to-r from-[#3C4F76] to-[#383F51]"></div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
