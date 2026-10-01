import React from 'react'
import { useState } from 'react';
import { RiCloseLine, RiMenu2Line } from '@remixicon/react';

const Navbar = () => {
  const [Menu, openMenu] = useState(false);
  const [showmenu, setShowMenu] = useState(true);
  return (
    <nav className="w-full relative  ">
      <div className="w-full h-auto fixed backdrop-blur z-2 flex flex-wrap justify-between md:items-center text-white px-10 pt-6 md:px-20">
      <div><span className="text-4xl font-bold tracking-[.15em] italic">MY PORTFOLIO</span> </div>
     <div> <ul className = {` ${ Menu ? "block" : "hidden"} mx-24 py-2 font-semibold md:mt-5 bg-black px-2 rounded-xl bg-opacity-30 md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex gap-6` }>
      <a href="#About"><li className="text-md transition-all duration-300 p-1 md:p-0 hover:text-[#465697]">About</li></a>
       <a href="#Skills"><li className="text-md transition-all duration-300 p-1 md:p-0 hover:text-[#465697]">Skills</li></a>
       <a href="#Experience"><li className="text-md transition-all duration-300 p-1 md:p-0 hover:text-[#465697]">Experience</li></a>
       <a href="#Projects"><li className="text-md transition-all duration-300 p-1 md:p-0 hover:text-[#465697]">Projects</li></a>
       <a href="#contact"><li className="text-md transition-all duration-300 p-1 md:p-0 hover:text-[#465697]">Contact</li></a>
      </ul>
      { showmenu ? 
        (<RiMenu2Line size={30} className="md:hidden absolute right-10 top-6 transition-all duration-300 cursor-pointer" onClick={() => {openMenu(!Menu); setShowMenu(false)}} />) : (<RiCloseLine size={30} className="md:hidden absolute right-10 top-6 transition-all duration-300 cursor-pointer" onClick={() => {openMenu(!Menu); setShowMenu(true)}} />)
      }
      </div>
      </div>
    </nav>
  )
}

export default Navbar
