import React from "react";
import GTImage from "../../public/assets/goaltrackSS.png";
import TCImage from "../../public/assets/tinder-clone.png";
import ProjectItem from "./ProjectItem";

function Projects() {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-10 py-16">
        <p className="text-xl tracking-widest uppercase text-[#3C4F76]">
          Projects
        </p>
        <div className="flex justify-center">
          <div className="absolute mt-[10px] h-12 w-[290px] bg-[#3C4F76] rounded-full z-[-1] animate-slide-in-right"></div>
          <h2 className="py-4 text-[#EFF6EE]">What I've Built</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="GoalTrack"
            image={GTImage}
            projectUrl="/goaltrack"
            tech="ReactJS"
          />
          <ProjectItem
            title="Tinder Clone"
            image={TCImage}
            projectUrl="/tinderclone"
            tech="React Native"
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
