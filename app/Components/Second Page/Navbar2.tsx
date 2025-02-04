"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useContext, useRef, useState } from "react";
import { FaUser } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { DarkModeContext } from "@/app/themeToggle";
import Link from "next/link";

const Navbar2 = () => {
  const sideMenuRef = useRef<HTMLUListElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    setIsOpen(true);
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(-16rem)";
    }
  };

  const closeMenu = () => {
    setIsOpen(false);
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(16rem)";
    }
  };

  ///For dark mode
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

        <div
          onClick={openMenu}
          className="flex flex-row justify-center items-center gap-2 py-1 px-2 rounded-md bg-slate-700 text-white cursor-pointer"
        >
          <Image src={assets.menu_white} alt="" className="w-4 h-4" /> Menu
        </div>

        {isOpen && (
          <ul
            ref={sideMenuRef}
            className="flex flex-col fixed  items-center border-b-2 px-3 py-4 gap-8 bg-slate-400 left-0 top-0 bottom-0 w-64 z-50 h-screen  transition duration-500 dark:bg-darkTheme dark:text-white "
          >
            <li
              onClick={closeMenu}
              className="px-3 py-2 cursor-pointer absolute right-6 top-6"
            >
              <Image
                src={isDarkMode ? assets.close_white : assets.close_black}
                alt=""
                className="w-4"
              />
            </li>
            <li
              onClick={closeMenu}
              className="px-3 py-2 mt-10 cursor-pointer hover:text-gray-700 dark:hover:text-yellow-300"
            >
              Movies
            </li>
            <li
              onClick={closeMenu}
              className="px-3 py-2 cursor-pointer hover:text-gray-700 dark:hover:text-yellow-300"
            >
              Tv Shows
            </li>
            <li
              onClick={closeMenu}
              className="px-3 py-2 cursor-pointer hover:text-gray-700 dark:hover:text-yellow-300"
            >
              Upcoming
            </li>
            <li
              onClick={closeMenu}
              className="px-3 py-2 cursor-pointer hover:text-gray-700 dark:hover:text-yellow-300"
            >
              Top Imdb
            </li>
            <li
              className="px-3 py-2 cursor-pointer hover:text-gray-700 dark:hover:text-yellow-300 md:hidden flex justify-center items-center gap-2"
            >
               <FaUser /> Login
            </li>
          </ul>
        )}

        <div className="hidden md:flex flex-row justify-center items-center border bg-slate-500 px-2 py-1.5 rounded-md dark:border-darkTheme dark:bg-slate-700 ">
          <span className="">
            <FaSearch className="w-6 md:w-8 text-white" />
          </span>
          <input
            type="text"
            className="w-full md:w-[20rem] focus:outline-none px-2 py-1 rounded-sm dark:text-black"
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

        <div className="hidden md:flex justify-center items-center gap-2">
          <FaUser /> Login
        </div>
      </div>
    </nav>
  );
};

export default Navbar2;
