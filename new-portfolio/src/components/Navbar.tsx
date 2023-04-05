import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { VscGithub } from "react-icons/vsc";
import { FiMail } from "react-icons/fi";
import { BsPersonLinesFill } from "react-icons/bs";

function Navbar() {
  const [nav, setNav] = useState<boolean>(false);

  const handleNav = () => {
    setNav((prev) => !prev);
  };

  return (
    <div className="fixed w-full h-20 shadow-xl z-[100] ease-in duration-300">
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
          <div className="cursor-pointer md:hidden" onClick={handleNav}>
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#EFF6EE] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div className="flex w-full items-center justify-between">
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
            <div
              className="rounded-full shadow-lg shadow-[#3C4F76] p-3 cursor-pointer"
              onClick={handleNav}
            >
              <AiOutlineClose />
            </div>
          </div>
          <div className="border-b border-[#3c4f76]/50 mt-3">
            <p className="w-[85%] md:w-[90%] py-4">
              Enter programing saying here
            </p>
          </div>
          <div className="py-4 flex flex-col">
            <ul>
              <Link href="/">
                <li className="py-4 text-sm">Home</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm">Skills</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm">Projects</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm">Skills</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm">Contact</li>
              </Link>
            </ul>
            <div className="pt-20 sm:pt-40">
              <p className="uppercase tracking-widest text-[#3c4f76]">
                Let's connect
              </p>
              <div className="flex items-center justify-between py-4 w-full sm:w-[80%]">
                <div className="rounded-full shadow-lg shadow-[#3c4f76] p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <AiOutlineLinkedin />
                </div>
                <div className="rounded-full shadow-lg shadow-[#3c4f76] p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <VscGithub />
                </div>
                <div className="rounded-full shadow-lg shadow-[#3c4f76] p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FiMail />
                </div>
                <div className="rounded-full shadow-lg shadow-[#3c4f76] p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <BsPersonLinesFill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
