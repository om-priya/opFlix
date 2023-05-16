"use client";

import React from "react";
import { useState } from "react";

export default function Form() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    setUser((prev) => ({ ...prev, [name]: value }));
  }
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          Content_Type: "application/json",
        },
        body: JSON.stringify({
          username: user.username,
          email: user.email,
          phone: user.phone,
          message: user.message,
        }),
      });
      if (response.status === 200) {
        setUser({
          username: "",
          email: "",
          phone: "",
          message: "",
        });
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="block max-w-md rounded-lg  p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
      <form onSubmit={handleSubmit}>
        <div className="relative mb-6 flex flex-col space-y-2">
          <label htmlFor="username">Enter Your Name</label>
          <input
            type="text"
            className="border px-3 py-[0.32rem] rounded-lg"
            id="username"
            name="username"
            value={user.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="relative mb-6 flex flex-col space-y-2">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="border px-3 py-[0.32rem] rounded-lg"
            id="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="relative mb-6 flex flex-col space-y-2">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="number"
            className="border px-3 py-[0.32rem] rounded-lg"
            id="phone"
            name="phone"
            value={user.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="relative mb-6 flex flex-col space-y-2">
          <label htmlFor="emessage">Message</label>
          <textarea
            className="border px-3 py-[0.32rem] rounded-lg"
            id="message"
            name="message"
            value={user.message}
            onChange={handleChange}
            required
            rows="3"
          ></textarea>
        </div>
        <div>
          {status === "success" && (
            <p className="relative mb-6 flex flex-col space-y-2 text-green-500">
              Thank you for your message
            </p>
          )}
          {status === "error" && (
            <p className="relative mb-6 flex flex-col space-y-2 text-red-500">
              oops Error Occured!
            </p>
          )}
          <button
            type="submit"
            className="border bg-black text-white rounded-2xl p-2 hover:bg-slate-800"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}
