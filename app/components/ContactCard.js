import React from "react";

export default function ({ icons, title, info_1, info_2, endLine }) {
  return (
    <div className="border mt-3 w-64 shadow-xl text-center rounded-2xl">
      <i className="text-red-700 flex justify-center mb-2 mt-2">{icons}</i>
      <p className="font-bold mb-2">{title}</p>
      <p className="italic font-light">{info_1}</p>
      <p className="italic font-light mb-2">{info_2}</p>
      <p className="mb-2">{endLine} &gt;</p>
    </div>
  );
}
