import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

function Navbar() {
  return (
    <div className="fixed w-full h-20 shadow-xl z-[100]">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <div className="flex">
          <div className="bg-[#3C4F76] rounded-full text-[#EFF6EE] font-bold w-10 h-10 flex items-center justify-center text-2xl">
            k
          </div>
          <div className=" border-[#3C4F76] border-2 rounded-full text-[#3C4F76] font-bold w-10 h-10 flex items-center justify-center text-2xl">
            m
          </div>
          <div className="bg-[#3C4F76] rounded-full text-[#EFF6EE] font-bold w-10 h-10 flex items-center justify-center text-2xl">
            k
          </div>
        </div>
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">About</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Project
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Contact
              </li>
            </Link>
          </ul>
          <div className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div className="fixed left-0 top-0 w-full bg-black/70">
        <div className="left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#AB9F9D] p-10 ease-in duration-500">
          <div className="flex w-full items-center justify-between">
            <div className="flex">
              <div className="bg-[#3C4F76] rounded-full text-[#AB9F9D] font-bold w-10 h-10 flex items-center justify-center text-2xl">
                k
              </div>
              <div className=" border-[#3C4F76] border-2 rounded-full text-[#3C4F76] font-bold w-10 h-10 flex items-center justify-center text-2xl">
                m
              </div>
              <div className="bg-[#3C4F76] rounded-full text-[#AB9F9D] font-bold w-10 h-10 flex items-center justify-center text-2xl">
                k
              </div>
            </div>
            <div className="rounded-full shadow-lg shadow-[#3C4F76] p-3 cursor-pointer">
              <AiOutlineClose />
            </div>
          </div>
          <div className="border-b border-[#3c4f76]/50 mt-3">
            <p>Enter programing saying here</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
