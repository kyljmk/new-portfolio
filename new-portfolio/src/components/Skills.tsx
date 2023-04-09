import React from "react";
import Image from "next/image";
import { ISkill } from "@/Types";
import CSharp from "../../public/assets/csharp.png";
import JS from "../../public/assets/javascript.png";
import TS from "../../public/assets/typescript.png";
import Html from "../../public/assets/html.png";
import Css from "../../public/assets/css.png";
import Tailwind from "../../public/assets/tailwind.png";
import Net from "../../public/assets/net.png";
import ReactLogo from "../../public/assets/react.png";
import Github from "../../public/assets/github.png";
import Sql from "../../public/assets/sqlserver.png";

function Skills() {
  const skillsArray: ISkill[] = [
    {
      name: "C#",
      image: CSharp,
    },
    {
      name: "JavaScript",
      image: JS,
    },
    {
      name: "TypeScript",
      image: TS,
    },
    {
      name: "HTML",
      image: Html,
    },
    {
      name: "CSS",
      image: Css,
    },
    {
      name: "Tailwind",
      image: Tailwind,
    },
    {
      name: ".NET",
      image: Net,
    },
    {
      name: "React",
      image: ReactLogo,
    },
    {
      name: "GitHub",
      image: Github,
    },
    {
      name: "SQL Server",
      image: Sql,
    },
  ];

  const skillElements = skillsArray.map((skill: ISkill) => {
    return (
      <div className="p-6 max-w-[300px] shadow-lg flex justify-center items-center shadow-[#AB9F9D] rounded-xl hover:scale-105 ease-in duration-200">
        <div className="grid grid-cols-2 gap-4 justify-center items-center">
          <div className="m-auto">
            <Image src={skill.image} alt="" width={64} height={64} />
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
          <div className="absolute bg-[#3C4F76] h-11 w-[240px] sm:w-[280px] sm:h-12 rounded-full z-[-1] mt-[18px] ml-[-15px] animate-slide-in-left"></div>
          <h2 className="py-6 text-[#EFF6EE]">What I Can Do</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 px-5">
          {skillElements}
          <h2>hello</h2>
        </div>
      </div>
    </div>
  );
}

export default Skills;
