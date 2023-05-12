"use client";

import React from "react";
import { FaBars } from "react-icons/fa";
import { GiCrossMark } from "react-icons/gi";
import { useState } from "react";

export default function Ham() {
  const [ham, setHam] = useState(false);
  return (
    <div
      className="md:hidden mr-8 text-xl cursor-pointer z-10"
      onClick={() => setHam(!ham)}
    >
      {ham ? <GiCrossMark /> : <FaBars />}
    </div>
  );
}
