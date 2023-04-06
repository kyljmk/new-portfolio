import React from "react";
import Image from "next/image";
import LaptopImage from ".//../../public/assets/laptop.jpg";

function About() {
  return (
    <div className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#3C4F76]">
            About
          </p>
          <div className="py-4">
            <div className="absolute bg-[#3C4F76] h-11 w-[200px] self-start rounded-full animate-slide-in-right"></div>
            <h2 className="text-[#3C4F76]">Who I Am</h2>
          </div>
          <p className="py-2">A late bloomer.</p>
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
          <p className="py-2">Check out some of my latest projects!</p>
        </div>
        <div className="border-2 border-black">
          <Image
            src={LaptopImage}
            alt="stock image of a laptop"
            width={600}
            height={400}
            className="border-[#3C4F76] border-[1px] rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
