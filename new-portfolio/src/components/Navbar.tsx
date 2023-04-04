import React from "react";
import Image from "next/image";
import Link from "next/link";

function Navbar() {
  return (
    <div className="fixed w-full h-20 shadow-xl z-[100]">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <div className="flex">
          <div className="bg-blue-500 rounded-full text-white font-bold w-10 h-10 flex items-center justify-center text-2xl">
            k
          </div>
          <div className=" border-blue-500 border-2 rounded-full text-blue-500 font-bold w-10 h-10 flex items-center justify-center text-2xl">
            m
          </div>
          <div className="bg-blue-500 rounded-full text-white font-bold w-10 h-10 flex items-center justify-center text-2xl">
            k
          </div>
        </div>
        <div>
          <ul>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
