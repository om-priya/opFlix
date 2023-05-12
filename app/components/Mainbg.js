import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Mainbg({ title, description, buttonText, imgLink }) {
  return (
    <div>
      <div className="bg-gradient-to-r from-violet-300 to-fuchsia-300 min-h-[68vh]">
        <div className="flex flex-col md:flex-row justify-between items-center space-x-4">
          <div className="md:mt-3">
            <h1 className="text-3xl font-bold p-2">{title}</h1>
            <p className="font-medium p-2">{description}</p>
            <Link href={"/movie"}>
              <button className="bg-black border rounded-2xl text-white p-1 font-medium hover:bg-white hover:text-black">
                {buttonText}
              </button>
            </Link>
          </div>
          <div className="md:mt-3">
            <Image
              src={imgLink}
              alt="Picture of Netflix"
              width={"auto"}
              height={"auto"}
              priority={"false"}
              className="h-60 w-92"
            />
          </div>
        </div>
        <div className="absolute bottom-[160px] left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#fff"
              fillOpacity="1"
              d="M0,128L48,160C96,192,192,256,288,240C384,224,480,128,576,112C672,96,768,160,864,170.7C960,181,1056,139,1152,144C1248,149,1344,203,1392,229.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
}
