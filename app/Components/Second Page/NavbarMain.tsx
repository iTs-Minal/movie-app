"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useContext, useEffect, useRef, useState } from "react";
import { FaUser } from "react-icons/fa6";
import { DarkModeContext } from "@/app/themeToggle";
import Link from "next/link";
import { IoCloseCircleSharp, IoNotifications } from "react-icons/io5";
import { SlMenu } from "react-icons/sl";
import { GoDotFill } from "react-icons/go";
import { RiSearch2Line } from "react-icons/ri";


const NavbarMain = () => {
  //For side Menu
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

///For scroll effect
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);

  return (
    <nav className={`flex dark:bg-darkHover fixed top-0 w-full z-50 justify-between bg-slate-300 py-3.5 border-b dark:border-gray-900 ${ isScroll
      ? "bg-white bg-opacity-30 backdrop-blur-lg shadow-sm dark:bg-slate-800/30  dark:shadow-white/20"
      : ""}`}>
      <div className="flex justify-between items-center ml-4">
        <div className="flex justify-center items-center gap-4 dark:text-white">
          <div onClick={openMenu} className="flex justify-center p-2.5  hover:rounded-full hover:bg-slate-900/70 hover:text-white">
            <span>
              <SlMenu size={20} />
            </span>
          </div>
          {isOpen && (
          <div className="flex flex-col fixed  items-center px-3 py-4 bg-slate-300 left-0 top-0 bottom-0 w-64 z-50 h-screen  transition duration-500 dark:bg-darkTheme dark:text-white">
            <div
              onClick={closeMenu}
              className="p-1 cursor-pointer absolute right-6 top-6 dark:hover:rounded-full dark:hover:bg-slate-900/70 dark:hover:text-white"
            >
              <span><IoCloseCircleSharp size={36} className="w-10" /></span>
            </div>
             <ul
            ref={sideMenuRef}
            className=" flex flex-col items-center justify-center relative top-20 p-2 gap-6"
          >
           
            <li
              onClick={closeMenu}
              className="px-3 py-2 cursor-pointer hover:bg-darkHover/50 hover:rounded-3xl hover:text-yellow-400 dark:hover:text-yellow-300"
            >
              Movies
            </li>
            <li
              onClick={closeMenu}
              className="px-3 py-2 cursor-pointer hover:bg-darkHover/50 hover:rounded-3xl hover:text-yellow-400 dark:hover:text-yellow-300"
            >
              Tv Shows
            </li>
            <li
              onClick={closeMenu}
              className="px-3 py-2 cursor-pointer hover:bg-darkHover/50 hover:rounded-3xl hover:text-yellow-400 dark:hover:text-yellow-300"
            >
              Upcoming
            </li>
            <li
              onClick={closeMenu}
              className="px-3 py-2 cursor-pointer hover:bg-darkHover/50 hover:rounded-3xl hover:text-yellow-400 dark:hover:text-yellow-300"
            >
              Top ImDB
            </li>
          </ul>
          </div>
         
        )}


          <div className="flex justify-center items-baseline font-Kanit text-2xl">
          <Link href="/">
            <strong>Movie App</strong>
          </Link>
            <span className="flex">
              <GoDotFill className="text-red-400" />
            </span>
          </div>
        </div>

        <div className="left-10 relative">
          <form className="flex justify-center  items-center ml-20 gap-2 bg-slate-400 rounded-full">
            <input type="text" className="w-[550px] px-4 p-2 rounded-full rounded-r-none font-Outfit bg-white/90 focus:outline-none dark:bg-slate-700 dark:text-white dark:placeholder:text-white/90" placeholder="Enter keywords..." />
            <button className="px-4">
              <span>
                <RiSearch2Line size={20} />
              </span>
            </button>
          </form>
        </div>
      </div>

      <div className="flex justify-center mr-4 dark:text-white">
        <div className="flex gap-4 justify-center items-center">
          <div
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="flex justify-center p-2.5 hover:scale-110 transition duration-100  dark:hover:rounded-full dark:hover:bg-slate-900/70 dark:hover:text-white/90"
          >
            <Image src={isDarkMode?assets.sun:assets.moon} alt="moon" className="w-6 " />
          </div>
          <div className="p-2.5  hover:rounded-full hover:bg-slate-900/70 hover:text-white/90">
            <span className="">
              <IoNotifications size={22} className="w-6" />
            </span>
          </div>
          <div className="flex justify-center p-2.5 hover:rounded-full hover:bg-slate-900/70 hover:text-white/90">
            <span className="">
              <FaUser size={20} className="w-6"/>
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarMain;
