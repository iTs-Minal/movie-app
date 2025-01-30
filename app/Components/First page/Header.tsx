import Image from 'next/image'
import React from 'react'
import {assets} from "../../../assets/assets"
import { FaSearch } from 'react-icons/fa'
import { FaArrowRight} from 'react-icons/fa6'
// import {motion} from "framer-motion"

function Header() {
  return (
    <div className='flex flex-col justify-center items-center w-full h-screen'>
        <div className='mt-[-10rem] flex flex-col items-center justify-center'>
            <Image src={assets.movie} alt=""  className='w-60 h-60'/>
            <h1 className='text-4xl text-black text-semibold mt-2 p-2 mb-2'><strong>Movie App.com</strong></h1>
        </div>

        <div className='w-full flex items-center justify-center py-3 mt-3'>
            <input type="text" className='w-[750px] rounded-md focus:outline-none
 border border-gray-500 py-2 focus:placeholder-hidden' placeholder='Enter Keywords...' />
            <button className='w-15 h-15 px-4 py-[13px] rounded-md bg-slate-500'><FaSearch className='text-semibold'/></button>
        </div>

        <button
        className='flex flex-row items-center gap-4 border text-2xl border-gray-500 px-10 py-3 mt-5 rounded-full hover:scale-110 transition duration-300'>
            Visit full site <FaArrowRight/>
        </button>
    </div>
  )
}

export default Header
