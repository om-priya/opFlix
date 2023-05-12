import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="bg-black text-white mt-[5vh] md:mt-[10vh]">
      <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div>
          <p className="text-2xl ml-2 text-red-600">OpFlix</p>
        </div>
        <div className="flex gap-5 justify-center items-center">
          <Link href={"https://twitter.com/Iamompriya"}>
            <FaFacebook size={25} color="blue" className="cursor-pointer" />
          </Link>
          <Link href={"https://github.com/om-priya"}>
            <FaGithub size={25} color="grey" className="cursor-pointer" />
          </Link>
          <Link href={"https://twitter.com/Iamompriya"}>
            <FaTwitter size={25} color="blue" className="cursor-pointer" />
          </Link>
          <Link href={"https://www.linkedin.com/in/om-priya-067825201/"}>
            <FaLinkedinIn size={25} color="blue" className="cursor-pointer" />
          </Link>
          <Link href={"https://www.instagram.com/i_am_ompriya/"}>
            <FaInstagram size={25} color="pink" className="mr-2" />
          </Link>
        </div>
      </div>
      <div className="p-4 text-center text-white">
        © 2023 Copyright:
        <Link className="text-white" href={"https://tailwind-elements.com/"}>
          Tailwind Elements
        </Link>
      </div>
    </footer>
  );
}
