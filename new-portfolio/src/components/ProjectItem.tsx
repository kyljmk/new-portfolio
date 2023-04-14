import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IProjectProps } from "@/Types";

function ProjectItem({ title, image, projectUrl, tech }: IProjectProps) {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-[#AB9F9D] rounded-3xl p-4 group hover:bg-gradient-to-t from-[#A98743] to-[#AB9F9D]">
      <Image
        className="rounded-3xl group-hover:opacity-10"
        src={image}
        alt="/"
        style={{ objectFit: "cover", height: "100%" }}
      />
      <div className="hidden group-hover:block absolute border-[#EFF6EE] border-4 text-[#EFF6EE] rounded-3xl p-8 sm:p-12">
        <h3 className="text-2xl text-center tracking-wider">{title}</h3>
        <p className="pb-4 pt-2 text-center">{tech}</p>
        <Link href={projectUrl}>
          <p className="text-center py-3 rounded-full bg-[#EFF6EE] text-[#A98743] font-bold text-lg cursor-pointer">
            More Info
          </p>
        </Link>
      </div>
    </div>
  );
}

export default ProjectItem;
