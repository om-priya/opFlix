import React from "react";
import Link from "next/link";
import Ham from "./Ham";

export default function Navbar() {
  return (
    <nav className="flex justify-between w-screen  items-center bg-gray-100 h-14 drop-shadow-2xl">
      {/* Navbar starts here */}
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
      {/* Hamburger menu for small screens */}
      <Ham />
      {/* Navbar ends here */}
    </nav>
  );
}
