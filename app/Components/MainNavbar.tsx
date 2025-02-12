"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useContext, useEffect, useRef, useState } from "react";
import { FaSquareUpwork, FaUser } from "react-icons/fa6";
import { DarkModeContext } from "@/app/ThemeToggle/themeToggle";
import Link from "next/link";
import { IoCloseCircleSharp, IoNotifications } from "react-icons/io5";
import { SlMenu } from "react-icons/sl";
import { GoDotFill } from "react-icons/go";
import { RiMovie2AiFill, RiSearch2Line } from "react-icons/ri";
import { BiSolidSlideshow } from "react-icons/bi";
import { FaImdb } from "react-icons/fa";


const MainNavbar = () => {
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
    <nav className={`flex sticky top-0 left-0 h-20 w-full z-50 justify-between  py-3.5 bg-[linear-gradient(to_top,rgba(147,197,253,0.7),rgba(103,232,249,0.5))] 
                dark:bg-[linear-gradient(to_bottom,rgba(107,114,128,0.7),rgba(71,85,105,0.4),rgba(31,41,55,0.8))] ${ isScroll
      ? "bg-[linear-gradient(to_top,rgba(147,197,253,0.2),rgba(103,232,249,0.1))] bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-slate-800/50  dark:shadow-white/20"
      : ""}`}>
      <div className="flex justify-between items-center ml-4">
        <div className="flex justify-center items-center gap-4 dark:text-white">
          <div onClick={openMenu} className="flex justify-center md:p-2.5 p-1  hover:rounded-full hover:bg-slate-900/70 hover:text-white">
            <span>
              <SlMenu size={20} />
            </span>
          </div>

          {isOpen && (
          <div className="flex flex-col fixed  items-center px-3 py-4  left-0 top-0 bottom-0 w-64 z-50 h-screen
            bg-[linear-gradient(to_right,rgba(147,197,253,1),rgba(103,232,249,1))]
           dark:bg-[linear-gradient(to_left,rgba(107,114,128,1),rgba(71,85,105,1),rgba(31,41,55,1))]
             transition duration-1000 dark:text-white">
            <div
              onClick={closeMenu}
              className="p-1 cursor-pointer absolute right-6 top-6 dark:hover:rounded-full dark:hover:bg-slate-900/70 dark:hover:text-white"
            >
              <span><IoCloseCircleSharp size={36} className="w-10" /></span>
            </div>
             <ul
            ref={sideMenuRef}
            className=" flex flex-col  justify-center relative top-20 p-2 gap-6"
          >
           
        <Link href="/Main/Movie"><li
              onClick={closeMenu}
              className="flex items-center gap-4 px-3 py-2 cursor-pointer hover:bg-darkHover/50 hover:rounded-3xl hover:text-yellow-400 dark:hover:text-yellow-300"
            >
            <RiMovie2AiFill />  Movies
            </li></Link>
            <Link href="/Main/Tvshows"><li
              onClick={closeMenu}
              className="flex justify-center items-center gap-4 px-3 py-2 cursor-pointer hover:bg-darkHover/50 hover:rounded-3xl hover:text-yellow-400 dark:hover:text-yellow-300"
            >
             <BiSolidSlideshow /> Tv Shows
            </li></Link>
            <Link href="/Main/Upcoming"> <li
              onClick={closeMenu}
              className="flex justify-center items-center gap-4 px-3 py-2 cursor-pointer hover:bg-darkHover/50 hover:rounded-3xl hover:text-yellow-400 dark:hover:text-yellow-300"
            >
             <FaSquareUpwork /> Upcoming
            </li></Link>
            <Link href="/Main/TopImDb"><li
              onClick={closeMenu}
              className="flex justify-center items-center gap-4 px-3 py-2 cursor-pointer hover:bg-darkHover/50 hover:rounded-3xl hover:text-yellow-400 dark:hover:text-yellow-300"
            >
             <FaImdb /> Top ImDB
            </li></Link>
          </ul>
          </div>
         
        )}

          <div className="flex justify-center items-baseline font-Kanit md:text-2xl text-lg">
          <Link href="/">
            <strong>Movie App</strong>
          </Link>
            <span className="flex">
              <GoDotFill className="text-red-400" />
            </span>
          </div>
        </div>

        <div className="left-10 relative">
          <form className={`hidden  md:flex md:justify-center  md:items-center ml-20 gap-2 bg-slate-400 rounded-full ${isScroll?"hidden":""}`}>
            <input type="text" className="w-[550px] px-4 p-2 rounded-full rounded-r-none font-Outfit bg-white/90 focus:outline-none dark:bg-slate-700/70 dark:text-white dark:placeholder:text-white/90" placeholder="Enter keywords..." />
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
            className={`flex p-2.5 cursor-pointer hover:rounded-full hover:bg-slate-900/70 hover:text-white ${
              isScroll ? "hidden" : "md:hidden"
            }`}
          >
            <RiSearch2Line size={20} />
          </div>

          <div
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="flex justify-center md:p-2.5 p-1 hover:scale-110 transition duration-100  dark:hover:rounded-full dark:hover:bg-slate-900/70 dark:hover:text-white/90"
          >
            <Image src={isDarkMode?assets.sun:assets.moon} alt="moon" className="w-6 " />
          </div>
          <div className="md:p-2.5 p-1 hover:rounded-full hover:bg-slate-900/70 hover:text-white/90">
            <span className="">
              <IoNotifications size={22} className="w-6" />
            </span>
          </div>
          <div className="flex justify-center md:p-2.5 p-1 hover:rounded-full hover:bg-slate-900/70 hover:text-white/90">
            <span className="">
              <FaUser size={20} className="w-6"/>
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MainNavbar;
