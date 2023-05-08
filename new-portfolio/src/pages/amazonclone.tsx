import React from "react";
import Image from "next/image";
import ECImage from "../../public/assets/kmkzon.png";
import Link from "next/link";
import { RiRadioButtonFill } from "react-icons/ri";

function Amazonclone() {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          fill
          style={{ objectFit: "cover" }}
          src={ECImage}
          alt={""}
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-[#A98743] z-10 pl-5">
          <h2 className="py-2 text-[#EFF6EE]">Amazon Clone</h2>
          <h3>NextJS / Stripe Checkout / Firestore</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-5 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p className="tracking-widest uppercase">Project</p>
          <h2 className="py-2 text-[#3C4F76] tracking-widest">Overview</h2>
          <p>
            This project was partially inspired by on YouTube tutorial I found
            while trying to learn the basic of NextJS
          </p>
          <Link
            href={"https://kmk-ecommerce.vercel.app/"}
            rel="noopener noreferrer"
            target={"_blank"}
          >
            <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          </Link>
          <Link
            href={"https://github.com/kyljmk/ecommerce-site"}
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
                <RiRadioButtonFill className="pr-1" /> NextJS
              </p>
              <p className="text-[#3C4F76] py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Tailwind CSS
              </p>
              <p className="text-[#3C4F76] py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Webhooks
              </p>
              <p className="text-[#3C4F76] py-2 flex items-center pl-2 md:pl-0">
                <RiRadioButtonFill className="pr-1" /> Firestore
              </p>
              <p className="text-[#3C4F76] py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Next Auth
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

export default Amazonclone;
