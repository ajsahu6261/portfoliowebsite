import React from 'react'
import { useState } from 'react';
import avatarImg from "../assets/ajay.png"
import { useEffect, useRef } from 'react';
import resume from "../assets/resume.pdf"

import Typed from 'Typed.js'
const Home = () => {
  const [showMore, setShowMore] = useState(false);
  const typedElement = useRef(null);

  useEffect(() => {
    if (!typedElement.current) return;

    const typed = new Typed(typedElement.current, {
      strings: [
        "Frontend Web Developer",
        "Backend Developer",
        "Full-Stack Mern Developer",
        "Python Developer",
      ],
      typeSpeed: 80,
      backSpeed: 50,
      backDelay: 1500,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div id="Home" className="width-full h-auto text-white flex-row md:flex justify-between items-center p-5 md:p-10">
       <div className="w-full mt-8 md:w-2/4 md:p-10 flex justify-center items-center">
        <img  src={avatarImg} alt="Ajay Sahu" className='w-full rounded-[50%]' />
        <div className='w-full bg-[#a1a1aa]'></div>
       </div>
      <div className="w-full h-auto md:w-2/4 md:pt-0 mt-10 md:mt-0">
      <span className="text-md text-justify md:text-3xl text-[#d4d4d4] tracking-tight ml-2">Hello, I'm </span>
       <h1 className="mt-2 text-3xl md:text-6xl font-bold flex leading-normal tracking-tight"> Ajay  <span className="text-[#2563eb] ml-2 md:ml-5"> Sahu</span></h1>
       <span ref={typedElement} className='text-2xl md:text3xl mt-2 text-[#2563eb] '></span>
        <p  className={!showMore ? "line-clamp-3" : "mt-4 text-sm md:text-2xl tracking-tight text-[#a1a1aa]"}>I’m a motivated and detail-oriented MCA graduate with a strong foundation in Web Development, React.js, JavaScript, and Python. I enjoy building responsive and scalable web applications with clean and user-friendly UI/UX. Passionate about problem-solving and learning new technologies, I aim to develop quality software solutions while continuously improving my technical skills. I’m seeking an entry-level opportunity as a Web Developer where I can contribute, learn, and grow in a professional IT environment.
</p>
      <div className="flex justify-around">
       <button onClick={() => setShowMore(!showMore)} className="mt-10 md:md-20 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold tracking-wide leading-normal rounded-3xl bg-[#2563eb] hover:bg-[#465697]">Show More</button>
        <a href={resume} > <button className="mt-10 md:md-20 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold tracking-wide leading-normal rounded-3xl bg-[#2563eb] hover:bg-[#465697]">Resume Download</button></a>
      </div>
       </div>
      
       </div>
  )
}

export default Home
