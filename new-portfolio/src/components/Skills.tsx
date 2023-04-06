import React from "react";
import Image from "next/image";
import { ISkill } from "@/Types";

function Skills() {
  const skillsArray: ISkill[] = [
    {
      name: "C#",
      image: "csharp.png",
    },
    {
      name: "HTML",
      image: "html.png",
    },
    {
      name: "CSS",
      image: "css.png",
    },
    {
      name: ".NET",
      image: "net.png",
    },
    {
      name: "React",
      image: "react.png",
    },
    {
      name: "GitHub",
      image: "github.png",
    },
    {
      name: "SQL Server",
      image: "sqlserver.png",
    },
  ];

  const skillElements = skillsArray.map((skill: ISkill) => {
    return (
      <div className="p-6 max-w-[300px] shadow-lg shadow-[#AB9F9D] rounded-xl hover:scale-105 ease-in duration-200">
        <div className="grid grid-cols-2 gap-4 justify-center items-center">
          <div className="m-auto">
            <Image
              src={`/../public/assets/${skill.image}`}
              alt=""
              width={64}
              height={64}
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <h3>{skill.name}</h3>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center items-center h-full px-5">
        <p className="text-xl tracking-widest uppercase text-[#3C4F76]">
          Skills
        </p>
        <div>
          <div className="absolute bg-[#3C4F76] h-11 w-[240px] rounded-full z-[-1] mt-[10px] ml-[-15px] animate-slide-in-left"></div>
          <h2 className="py-4 text-[#EFF6EE]">What I Can Do</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 px-5">
          {skillElements}
        </div>
      </div>
    </div>
  );
}

export default Skills;
