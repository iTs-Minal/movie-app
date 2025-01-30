import React from 'react'

function Navbar() {
  return (
<nav className='flex justify-between border-b-2 bg-slate-100 w-full'>
    <div className='flex justify-center items-center text-black text-2xl ml-14 cursor-pointer'>
        <strong>Movie App</strong>
    </div>
     
<ul className="flex justify-around px-3 py-4 gap-7 mr-10 ">
    <li className='px-3 py-2 cursor-pointer hover:text-yellow-400'>Home</li>
    <li className='px-3 py-2 cursor-pointer hover:text-yellow-400'>Movies</li>
    <li className='px-3 py-2 cursor-pointer hover:text-yellow-400'>Tv Shows</li>
    <li className='px-3 py-2 cursor-pointer hover:text-yellow-400'>Top Imdb</li>
</ul>
</nav>
  )
}

export default Navbar
