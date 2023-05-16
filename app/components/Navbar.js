"use client";

import React from "react";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { GiCrossMark } from "react-icons/gi";
import { useState } from "react";

export default function Navbar() {
  const [ham, setHam] = useState(false);
  return (
    <nav className="flex justify-between w-screen  items-center bg-gray-100 h-14 drop-shadow-2xl">
      {/* Navbar starts here */}
      {!ham && (
        <>
          <Link href={"/"}>
            <div className="text-3xl font-bold text-red-600 ml-8">OpFlix</div>
          </Link>
          <div className="hidden md:block">
            <ul className="flex">
              <Link href={"/"}>
                <li className="ml-8 cursor-pointer hover:text-red-600 hover:underline">
                  Home
                </li>
              </Link>
              <Link href={"/about"}>
                <li className="ml-8 cursor-pointer hover:text-red-600 hover:underline">
                  About
                </li>
              </Link>
              <Link href={"/movie"}>
                <li className="ml-8 cursor-pointer hover:text-red-600 hover:underline">
                  Movie
                </li>
              </Link>
              <Link href={"/contact"}>
                <li className="ml-8 mr-8 cursor-pointer hover:text-red-600 hover:underline">
                  Contact
                </li>
              </Link>
            </ul>
          </div>
        </>
      )}
      {ham && (
        <div className="flex justify-center min-w-[90vw]">
          <ul className="flex space-x-6 justify-center font-semibold ">
            <Link href={"/"}>
              <li className="hover:text-red-600 ml-4">Home</li>
            </Link>
            <Link href={"/about"}>
              <li className="hover:text-red-600">About</li>
            </Link>
            <Link href={"/movie"}>
              <li className="hover:text-red-600">Movie</li>
            </Link>
            <Link href={"/contact"}>
              <li className="hover:text-red-600">Contact</li>
            </Link>
          </ul>
        </div>
      )}
      {/* Hamburger menu for small screens */}
      <div
        className="md:hidden mr-8 text-xl cursor-pointer z-10"
        onClick={() => setHam(!ham)}
      >
        {ham ? <GiCrossMark /> : <FaBars />}
      </div>
      {/* Navbar ends here */}
    </nav>
  );
}
