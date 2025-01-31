"use client";
import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useContext } from 'react'
import { DarkModeContext } from "../../themeToggle";

function Navbar() {
  const darkModeContext = useContext(DarkModeContext);
  if (!darkModeContext) {
    throw new Error("DarkModeContext is undefined");
  }

  const { isDarkMode, setIsDarkMode } = darkModeContext;

  return (
<nav className='flex justify-between border-b-2 bg-slate-100 w-full dark:bg-darkTheme dark:text-white'>
    <div className='flex justify-center items-center text-black text-2xl ml-14 cursor-pointer dark:text-white'>
        <strong>Movie App</strong>
    </div>
     
<ul className="flex justify-around px-3 py-4 gap-7 mr-10 ">
    <li className='px-3 py-2 cursor-pointer hover:text-gray-700'>Home</li>
    <li className='px-3 py-2 cursor-pointer hover:text-gray-700'>Movies</li>
    <li className='px-3 py-2 cursor-pointer hover:text-gray-700'>Tv Shows</li>
    <li className='px-3 py-2 cursor-pointer hover:text-gray-700'>Top Imdb</li>
    <li onClick={() => setIsDarkMode((prev: boolean) => !prev)} className='px-3 py-2 cursor-pointer'><Image src={isDarkMode?assets.sun:assets.moon} alt="moon" className='w-6' /></li>
</ul>
</nav>
  )
}

export default Navbar
