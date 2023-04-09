import React from "react";
import Image from "next/image";
import Laptop from "../../public/assets/code-laptop.jpg";
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";
import { VscGithub } from "react-icons/vsc";
import { FiMail } from "react-icons/fi";
import { BsPersonLinesFill } from "react-icons/bs";

function Contact() {
  return (
    <div className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#3C4F76]">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-[#AB9F9D] rounded-3xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <Image
                  className="rounded-3xl"
                  src={Laptop}
                  alt="a laptop with code on the screen"
                />
              </div>
              <div>
                <h2 className="py-2">Kyle Manson-Kullin</h2>
                <p>Full Stack Developer</p>
                <p className="py-4">
                  I am available for freelance or full-time positions. Contact
                  me and let's talk.
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">Connect with me</p>
                <div className="flex items-center justify-between py-4">
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
                  <div className="rounded-full shadow-lg shadow-[#AB9F9D] p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <FiMail />
                  </div>
                  <div className="rounded-full shadow-lg shadow-[#AB9F9D] p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <BsPersonLinesFill />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
