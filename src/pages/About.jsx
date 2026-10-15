import React from 'react'
import { IoArrowForward } from 'react-icons/io5';
import aboutImg from "../assets/69e6ac0b27885ce3806e17e5c51158c9.jpg"
const about = () => {
  return (
    <div id="About"className="width-screen h-full md:h-[500px] text-white overflow-hidden items-center md:justify-center bg-black hover:bg-[#020617] shadow-xl mx-0 md:mx-20 bg-opacity-30 p-2 py-12 md:rounded-br-[50%] md:px-20 shadow-slate-900 flex flex-col md:flex-col justify-center gap-4 md:gap-12">
     
        <h2 className="w-full text-2xl md:text-4xl font-bold text-center m-4 mt-0">About Me</h2>
        {/* <div className="w-full md:flex flex-wrap flex-col md:flex-row items-center"> */}
          {/* <img className="w-full md:w-1/2 h-auto m-0" src={aboutImg} alt="About Image" /> */}
          <div className="width-full h-full md:h-full text-white gap-4 p-4 px-8 md:px-12 flex flex-col justify-center items-center  ">
           <p>Aspiring Full Stack Developer

I am an MCA final-year student passionate about Full Stack Web Development and software engineering. I am interested in building responsive, user-friendly, and scalable web applications using modern technologies.

Currently, I am working on my major project, <samp className='text-xl font-bold'>CRM</samp> , where I am exploring the development of a CRM system designed to manage client information and business workflows. I enjoy problem-solving, learning new technologies, and improving my technical skills.

I am looking for an opportunity to start my career in the IT industry, contribute to real-world projects, collaborate with experienced developers, and grow as a Full Stack Developer.</p>
      </div>
    </div>
  )
}

export default about
