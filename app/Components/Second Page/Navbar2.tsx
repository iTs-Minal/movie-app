"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useContext } from "react";
import { FaUser } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { DarkModeContext } from "@/app/themeToggle";
import Link from "next/link";

const Navbar2 = () => {
  const darkModeContext = useContext(DarkModeContext);
  if (!darkModeContext) {
    throw new Error("DarkModeContext is undefined");
  }

  const { isDarkMode, setIsDarkMode } = darkModeContext;

  return (
    <nav className="flex flex-col md:flex-row justify-between w-full border-b-2 bg-slate-300 py-4 dark:border-black dark:bg-slate-800 dark:text-white">
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-14">
        <div className="flex justify-center items-center text-black text-2xl ml-0 md:ml-14 cursor-pointer dark:text-white">
          <Link href="/">
            <strong>Movie App</strong>
          </Link>
        </div>

        <div className="flex flex-row justify-center items-center gap-2 py-1 px-2 rounded-md bg-slate-700 text-white cursor-pointer">
          <Image src={assets.menu_white} alt="" className="w-4 h-4" /> Menu
        </div>

        <div className="flex flex-row justify-center items-center border bg-slate-500 px-2 py-1.5 rounded-md dark:border-darkTheme dark:bg-slate-700 ">
          <span className="">
            <FaSearch className="w-6 md:w-8 text-white" />
          </span>
          <input
            type="text"
            className="w-full md:w-[20rem] focus:outline-none px-2 py-1 rounded-sm"
            placeholder="Enter Keywords..."
          />
        </div>
      </div>

      <div className="flex justify-center items-center mt-4 md:mt-0 mr-0 md:mr-10 gap-4 md:gap-10 cursor-pointer">
        <div onClick={() => setIsDarkMode((prev: boolean) => !prev)}>
          <Image
            src={isDarkMode ? assets.sun : assets.moon}
            alt=""
            className="w-6"
          />
        </div>

        <div className="flex justify-center items-center gap-2">
          <FaUser /> Login
        </div>
      </div>
    </nav>
  );
};

export default Navbar2;
