import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { VscGithub } from "react-icons/vsc";
import { FiMail } from "react-icons/fi";
import { BsPersonLinesFill } from "react-icons/bs";
import { useRouter } from "next/router";

function Navbar() {
  const [nav, setNav] = useState<boolean>(false);
  const [shadow, setShadow] = useState<boolean>(false);
  const [navBg, setNavBg] = useState<string>("#EFF6EE");
  const [linkColor, setLinkColor] = useState<string>("#3C4F76");
  const router = useRouter();

  useEffect(() => {
    if (router.asPath === "/goaltrack") {
      setNavBg("transparent");
      setLinkColor("#EFF6EE");
    } else {
      setNavBg("#EFF6EE");
      setLinkColor("#3C4F76");
    }
  }, [router]);

  const handleNav = () => {
    setNav((prev) => !prev);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 5) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      style={{ background: `${navBg}` }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100]"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href={"/#home"} scroll={false}>
          <div className="flex rounded-full border-2 border-[#A98743] bg-[#3C4F76] cursor-pointer">
            <div className="bg-[#3C4F76] border-2 rounded-full text-[#EFF6EE] font-bold w-10 h-10 flex items-center justify-center text-2xl">
              k
            </div>
            <div className="bg-[#EFF6EE] border-[#A98743] border-2 rounded-full text-[#3C4F76] font-bold w-10 h-10 flex items-center justify-center text-2xl">
              m
            </div>
            <div className="bg-[#3C4F76] border-2 rounded-full text-[#EFF6EE] font-bold w-10 h-10 flex items-center justify-center text-2xl">
              k
            </div>
          </div>
        </Link>
        <div>
          <ul style={{ color: `${linkColor}` }} className="hidden text md:flex">
            <Link href="/#home" scroll={false}>
              <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
            </Link>
            <Link href="/#about" scroll={false}>
              <li className="ml-10 text-sm uppercase hover:border-b">About</li>
            </Link>
            <Link href="/#skills" scroll={false}>
              <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
            </Link>
            <Link href="/#projects" scroll={false}>
              <li className="ml-10 text-sm uppercase hover:border-b">
                Projects
              </li>
            </Link>
            <Link href="/#contact" scroll={false}>
              <li className="ml-10 text-sm uppercase hover:border-b">
                Contact
              </li>
            </Link>
          </ul>
          <div
            style={{ color: `${linkColor}` }}
            className="cursor-pointer md:hidden"
            onClick={handleNav}
          >
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
          <div className=" border-b-2 border-l-2 rounded-3xl p-4 pr-5 border-[#3C4F76] flex w-full items-center justify-between">
            <Link href={"/#home"}>
              <div className="flex rounded-full border-2 border-[#A98743] bg-[#3C4F76] cursor-pointer">
                <div className="bg-[#3C4F76] border-2 rounded-full text-[#EFF6EE] font-bold w-10 h-10 flex items-center justify-center text-2xl">
                  k
                </div>
                <div className="bg-[#EFF6EE] border-[#A98743] border-2 rounded-full text-[#3C4F76] font-bold w-10 h-10 flex items-center justify-center text-2xl">
                  m
                </div>
                <div className="bg-[#3C4F76] border-2 rounded-full text-[#EFF6EE] font-bold w-10 h-10 flex items-center justify-center text-2xl">
                  k
                </div>
              </div>
            </Link>
            <div
              className="rounded-full shadow-lg shadow-[#3C4F76] p-2 cursor-pointer"
              onClick={handleNav}
            >
              <AiOutlineClose />
            </div>
          </div>

          <div className="py-4 flex flex-col">
            <ul>
              <Link
                onClick={() => {
                  setNav(false);
                }}
                href="/#home"
                scroll={false}
              >
                <li className="py-4 text-sm">Home</li>
              </Link>
              <Link
                onClick={() => {
                  setNav(false);
                }}
                href="/#about"
                scroll={false}
              >
                <li className="py-4 text-sm">About</li>
              </Link>
              <Link
                onClick={() => {
                  setNav(false);
                }}
                href="/#projects"
                scroll={false}
              >
                <li className="py-4 text-sm">Projects</li>
              </Link>
              <Link
                onClick={() => {
                  setNav(false);
                }}
                href="/#skills"
                scroll={false}
              >
                <li className="py-4 text-sm">Skills</li>
              </Link>
              <Link
                onClick={() => {
                  setNav(false);
                }}
                href="/#contact"
                scroll={false}
              >
                <li className="py-4 text-sm">Contact</li>
              </Link>
            </ul>
            <div className="pt-20 sm:pt-40">
              <p className="uppercase tracking-widest text-[#3c4f76]">
                Let's connect
              </p>
              <div className="flex items-center justify-between py-4 w-full sm:w-[80%]">
                <Link
                  href={
                    "https://www.linkedin.com/in/kyle-manson-kullin-34a933242/"
                  }
                  rel="noopener noreferrer"
                  target={"_blank"}
                >
                  <div className="rounded-full shadow-lg shadow-[#3c4f76] p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <AiOutlineLinkedin />
                  </div>
                </Link>
                <Link
                  href={"https://www.github.com/kyljmk"}
                  rel="noopener noreferrer"
                  target={"_blank"}
                >
                  <div className="rounded-full shadow-lg shadow-[#3c4f76] p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <VscGithub />
                  </div>
                </Link>
                <Link href={"malto:k.mansonkullin@googlemail.com"}>
                  <div className="rounded-full shadow-lg shadow-[#3c4f76] p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FiMail />
                  </div>
                </Link>
                <Link
                  href={"/#contact"}
                  scroll={false}
                  onClick={() => {
                    setNav(false);
                  }}
                >
                  <div className="rounded-full shadow-lg shadow-[#3c4f76] p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <BsPersonLinesFill />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
