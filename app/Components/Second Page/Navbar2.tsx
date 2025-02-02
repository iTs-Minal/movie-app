"use client";
import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useContext } from 'react'
import { FaUser } from 'react-icons/fa6'
import { FaSearch } from 'react-icons/fa';
import { DarkModeContext } from '@/app/themeToggle';

const Navbar2 = () => {

      const darkModeContext = useContext(DarkModeContext);
      if (!darkModeContext) {
        throw new Error("DarkModeContext is undefined");
      }
    
      const { isDarkMode, setIsDarkMode } = darkModeContext;

  return (
    <nav className='flex justify-between w-full  border-b-2 bg-slate-100 py-4 dark:border-darkTheme dark:bg-darkTheme dark:text-white'>
        <div className='flex flex-row justify-center items-center gap-14'>
            <div className='flex justify-center items-center text-black text-2xl ml-14 cursor-pointer dark:text-white'>
               <strong>MovieApp</strong> 
            </div>

            <div className='flex flex-row justify-center items-center gap-2 py-1 px-2 rounded-md bg-slate-700 text-white'>
              <Image src={assets.menu_white} alt="" className='w-4 h-4' />  Menu
            </div>

            <div className='flex flex-row justify-center items-center border bg-slate-500 px-2 py-1.5 rounded-md dark:border-darkTheme '>
                <span className='' ><FaSearch className='w-8 text-white'/></span>
                <input type="text" className='w-[20rem] focus:outline-none px-2 py-1  rounded-sm   ' placeholder='Enter Keywords...' />
            </div>
        </div>

        <div className='flex justify-center items-center mr-10 gap-10 cursor pointer'>
            <div onClick={() => setIsDarkMode((prev: boolean) => !prev)}>
            <Image src={isDarkMode ? assets.sun : assets.moon} alt="" className='w-6'/>
            </div>

            <div className='flex justify-center items-center gap-2'>
              <FaUser/> Login
            </div>
        </div>
    </nav>
  )
}

export default Navbar2
