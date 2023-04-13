import React from "react";
import Image from "next/image";
import Laptop from "../../public/assets/code-laptop.jpg";
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";
import { VscGithub } from "react-icons/vsc";
import { FiMail } from "react-icons/fi";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

function Contact() {
  return (
    <div id="contact" className="w-full md:h-screen">
      <div className="max-w-[1240px] m-auto px-10 py-16 w-full flex flex-col">
        <p className="text-xl tracking-widest uppercase text-[#3C4F76]">
          Contact
        </p>
        <div className="flex justify-center pb-4">
          <div className="absolute mt-[11px] h-12 w-[290px] bg-[#3C4F76] rounded-full z-[-1] animate-slide-in-right"></div>
          <h2 className="py-4 self-center text-[#EFF6EE]">Get In Touch</h2>
        </div>
        <div className="grid md:grid-cols-5 gap-8">
          <div className="col-span-3 md:col-span-2 w-full h-full shadow-xl shadow-[#AB9F9D] rounded-3xl p-4">
            <div className="h-full flex flex-col justify-between">
              <div>
                <div>
                  <Image
                    className="rounded-3xl"
                    src={Laptop}
                    alt="a laptop with code on the screen"
                  />
                </div>
                <div>
                  <h2 className="py-2 text-[#3C4F76]">Kyle Manson-Kullin</h2>
                  <p>Full Stack Developer</p>
                  <p className="py-4">
                    I am available for freelance or full-time positions. Contact
                    me and let's talk.
                  </p>
                </div>
              </div>
              <div>
                <p className="uppercase pt-8">Connect with me</p>
                <div className="flex items-center justify-around py-4">
                  <div className="rounded-full shadow-lg shadow-[#AB9F9D] p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <Link
                      href={
                        "https://www.linkedin.com/in/kyle-manson-kullin-34a933242/"
                      }
                      rel="noopener noreferrer"
                      target={"_blank"}
                    >
                      <FaLinkedinIn size="" />
                    </Link>
                  </div>
                  <div className="rounded-full shadow-lg shadow-[#AB9F9D] p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <Link
                      href={"https://www.github.com/kyljmk"}
                      rel="noopener noreferrer"
                      target={"_blank"}
                    >
                      <VscGithub />
                    </Link>
                  </div>
                  <Link href={"mailto:k.mansonkullin@googlemail.com"}>
                    <div className="rounded-full shadow-lg shadow-[#AB9F9D] p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FiMail />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-3 relative w-full h-auto shadow-xl shadow-[#AB9F9D] rounded-3xl ">
            <div className="absolute rounded-3xl bg-[#AB9F9D]/40 h-[100%] w-[100%] flex items-center justify-center">
              <span className="border-4 bg-[#EFF6EE] text-sm sm:text-base border-[#3C4F76] text-[#3C4F76] font-bold p-4 rounded-full z-10">
                This feature will be available soon!
              </span>
            </div>
            <div className="p-4 lg:p-8 opacity-40">
              <form>
                <div className="grid sm:grid-cols-2 gap-4 w-full pb-3">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2 pl-4">Name</label>
                    <input
                      className="border-2 rounded-3xl p-3 border-[#3C4F76] focus:outline-none focus:border-[#A98743] pl-5"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2 pl-4">
                      Phone Number
                    </label>
                    <input
                      className="border-2 rounded-3xl p-3 border-[#3C4F76] focus:outline-none focus:border-[#A98743] pl-5"
                      type="tel"
                    />
                  </div>
                  <div className="flex flex-col sm:col-span-2">
                    <label className="uppercase text-sm pl-4">Email</label>
                    <input
                      className="border-2 rounded-3xl p-3 border-[#3C4F76] focus:outline-none focus:border-[#A98743] pl-5"
                      type="email"
                    />
                  </div>
                  <div className="flex flex-col sm:col-span-2">
                    <label className="uppercase text-sm py-2 pl-4">
                      Subject
                    </label>
                    <input
                      className="border-2 rounded-3xl p-3 border-[#3C4F76] focus:outline-none focus:border-[#A98743] pl-5"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col sm:col-span-2">
                    <label className="uppercase text-sm py-2 pl-4">
                      Message
                    </label>
                    <textarea
                      className="border-2 rounded-3xl p-3 border-[#3C4F76] focus:outline-none focus:border-[#A98743] pl-5"
                      rows={5}
                    ></textarea>
                  </div>
                </div>
                <button className="w-full my-4">Send Message</button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/#home" scroll={false}>
            <div className="rounded-full text-[#3C4F76] shadow-lg shadow-[#AB9F9D] p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Contact;
