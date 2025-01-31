"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useContext, useRef } from "react";
import { DarkModeContext } from "../../themeToggle";

function Navbar() {
  const darkModeContext = useContext(DarkModeContext);
  if (!darkModeContext) {
    throw new Error("DarkModeContext is undefined");
  }

  const { isDarkMode, setIsDarkMode } = darkModeContext;

  const sideMenuRef = useRef<HTMLUListElement | null>(null);

  const openMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(-16rem)";
    }
  };

  const closeMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(16rem)";
    }
  };

  return (
    <nav className="flex justify-between  border-b-2 bg-slate-100 w-full dark:border-darkTheme dark:bg-darkTheme dark:text-white">
      <div className="flex justify-center items-center text-black text-2xl ml-14 cursor-pointer dark:text-white">
        <strong>Movie App</strong>
      </div>

      <div className="flex justify-center items-center">
        <ul className="hidden justify-around  md:flex  px-3 py-4 gap-7 mr-10 ">
          <li className="px-3 py-2 cursor-pointer hover:text-gray-700 dark:hover:text-yellow-300">
            Home
          </li>
          <li className="px-3 py-2 cursor-pointer hover:text-gray-700 dark:hover:text-yellow-300">
            Movies
          </li>
          <li className="px-3 py-2 cursor-pointer hover:text-gray-700 dark:hover:text-yellow-300">
            Tv Shows
          </li>
          <li className="px-3 py-2 cursor-pointer hover:text-gray-700 dark:hover:text-yellow-300">
            Top Imdb
          </li>

        </ul>

        <div
            onClick={() => setIsDarkMode((prev: boolean) => !prev)}
            className="px-3 py-2 mr-4 cursor-pointer"
          >
            <Image
              src={isDarkMode ? assets.sun : assets.moon}
              alt="moon"
              className="w-6"
/>
        </div>

        <div onClick={openMenu} className="px-3 py-2 mr-4  cursor-pointer block md:hidden">
          <Image
            src={isDarkMode ? assets.menu_white : assets.menu_black}
            alt=""
            className="w-6"
          />
        </div>
      </div>

      {/* --------------------- mobile-menu --------------*/}
      <ul
        ref={sideMenuRef}
        className="flex flex-col fixed md:hidden px-3 py-4 gap-8 bg-slate-200 -right-64 top-0 bottom-0 w-64 z-50 h-screen  transition duration-500 dark:bg-darkTheme dark:text-white "
      >
        <li
          onClick={closeMenu}
          className="px-3 py-2 cursor-pointer absolute right-6 top-6"
        >
          <Image
            src={isDarkMode ? assets.close_white : assets.close_black}
            alt=""
            className="w-6"
          />
        </li>
        <li
          onClick={closeMenu}
          className="px-3 py-2 mt-10 cursor-pointer hover:text-gray-700 dark:hover:text-yellow-300"
        >
          Home
        </li>
        <li
          onClick={closeMenu}
          className="px-3 py-2 cursor-pointer hover:text-gray-700 dark:hover:text-yellow-300"
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
          Top Imdb
        </li>
        {/* <li onClick={() => setIsDarkMode((prev: boolean) => !prev)} className='px-3 py-2 cursor-pointer'><Image src={isDarkMode?assets.sun:assets.moon} alt="moon" className='w-6' /></li> */}
      </ul>
    </nav>
  );
}

export default Navbar;
