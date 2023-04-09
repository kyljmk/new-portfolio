import React, { useEffect, useState } from "react";
import Image from "next/image";
import Kmk from ".//../../public/assets/kmk.png";
import { useInView } from "react-intersection-observer";

function About() {
  return (
    <div className="w-full md:h-screen p-2 flex items-center py-16 text-center">
      <div className="max-w-[1240px] flex flex-col justify-center m-auto md:grid grid-cols-3 gap-8 items-center px-8">
        <div className="col-span-2 flex flex-col justify-center items-center">
          <p className="uppercase text-xl tracking-widest w-full text-left pl-5 text-[#3C4F76]">
            About
          </p>
          <div className="flex justify-center py-4">
            <div className="absolute bg-[#3C4F76] h-11 w-[210px] self-start rounded-full animate-slide-in-right z-[-1]"></div>
            <h2 className="text-[#EFF6EE] py-1">Who I Am</h2>
          </div>
          <p className="py-2 font-bold tracking-widest text-[#A98743]">
            A late bloomer.
          </p>
          <p className="py-2">
            I was born in South Africa, raised in England, and until the age of
            30 I worked in bars and restaurants across Europe. I've always had
            an interest in tech and software, and in my 20s I began to play
            around with writing code as a personal hobby. By the end of my 20s
            my little hobby was bordering on a minor obsession, I couldn't teach
            myself as quickly, or to a high enough level, as I would like so I
            began looking for other avenues.
          </p>
          <p className="py-2">
            I began studying the School of Applied Technology's Full Stack .NET
            Course in 2022 and upon graduation they hired me as a development
            consultant. My professional experience is largely made up of back
            end .NET work, specifically creating the API and Database for a
            large project that allowed the sales team to search through
            consultants based upon their skills and preferences, and then email
            the profiles and CVs of said consultants to a specific client. While
            my personal projects are largely focus on the front end of web
            development.
          </p>
          <div className="flex justify-center">
            <p className="my-2 px-4 py-3 font-bold text-[#A98743] shadow-[#AB9F9D] shadow-lg cursor-pointer hover:scale-105 ease-in duration-200 rounded-full">
              Check out some of my latest projects!
            </p>
          </div>
        </div>
        <div className="flex justify-center shadow-lg shadow-[#AB9F9D] rounded-full p-2 hover:scale-105 ease-in duration-200">
          <Image
            src={Kmk}
            alt="stock image of a laptop"
            width={400}
            height={400}
            className="rounded-full"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
