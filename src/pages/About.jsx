import React from 'react'
import { IoArrowForward } from 'react-icons/io5';
import aboutImg from "../assets/69e6ac0b27885ce3806e17e5c51158c9.jpg"
const about = () => {
  return (
    <div id="About"className="width-full h-full md:h-full text-white md:flex overflow-hidden items-center md:flex-wap md:justify-center bg-black hover:bg-[#020617] shadow-xl mx-0 md:mx-20 bg-opacity-30 p-2 py-12 rounded-lg">
      <div>
        <h2 className="w-full text-2xl md:text-4xl font-bold text-center m-4 mt-0">About Me</h2>
        <div className="w-full md:flex flex-wrap flex-col md:flex-row items-center">
          <img className="w-full md:w-1/2 h-auto m-0" src={aboutImg} alt="About Image" />
          <ul>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1 text-[#465697]" />
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal text-[#966897]"> Frontend Web Developer</h1>
                <p className="text-sm md:text-md leading-tight">
                  I am a passionate and motivated Frontend Web Developer fresher with a strong interest in building modern, responsive, and user-friendly websites. I have hands-on knowledge of HTML, CSS, JavaScript, and React. I enjoy learning new technologies, improving my skills, and turning ideas into engaging web experiences.

                </p>
              </span>
            </div>
          <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1 text-[#465697]" />
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal text-[#966897]"> Backend Web Developer</h1>
                <p className="text-sm md:text-md leading-tight">
                  I am a passionate and motivated Backend Web Developer fresher with a strong interest in building reliable and efficient web applications. I have a good understanding of Python, APIs, databases, and backend development. I enjoy learning new technologies, solving problems, and developing secure and scalable backend solutions.
                </p>
              </span>
            </div>
             <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1 text-[#465697]" />
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal text-[#966897]"> Full Stack Web Developer</h1>
                <p className="text-sm md:text-md leading-tight">
                  I am a passionate and motivated Full Stack Web Developer fresher with a strong interest in creating engaging user experiences. I enjoy working on both front-end and back-end development, and I am always eager to learn new technologies and improve my skills.
                </p>
              </span>
            </div>
                 <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1 text-[#465697]" />
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal text-[#966897]"> Hardware & Network Engineer</h1>
                <p className="text-sm md:text-md leading-tight">
                  I am a Hardware & Network Engineer with 2 years of hands-on experience in IT support and network management. My experience includes desktop and laptop troubleshooting, hardware installation and maintenance, LAN/Wi-Fi configuration, router and switch setup, IP configuration, CCTV and DVR/NVR support, and network connectivity troubleshooting. I also handle system maintenance, software installation, and day-to-day technical issues to ensure smooth IT operations.
                  </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default about
