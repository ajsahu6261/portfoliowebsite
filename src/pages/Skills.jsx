import React from 'react'
import {FaCss3, FaFigma, FaHtml5, FaReact, FaPython, FaDesktop, FaJs} from "react-icons/fa"
import {SiC, SiCplusplus} from "react-icons/si"
import {SiMongodb} from "react-icons/si"
import { motion } from "framer-motion";



const Skills = () => {
  return (
   <div id="Skills" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl font-bold text-center text-white">Skills</h1>
      <div className=" flex flex-wrap items-center justify-around">
        <motion.div initial={{ opacity: 0, y: 40 }}
         whileInView={{ opacity: 1, y: 0 }} 
         viewport={{ once: true }} 
         transition={{ duration: 0.6 }}
         whileHover={{ scaleX: 1.03, y: -10, }}
         className="w-full flex flex-wrap md:w-4/4 gap-8 md:p-12 py-10">
        <motion.span 
         whileHover={{ rotate: 360, }}
         
         className="w-[120px] h-[120px] p-3 skew-y-3 bg-zinc-950 flex flex-col items-center rounded-2xl">
          <FaHtml5 color="#E34F26" size={50} />
          <h1 className="text-white ml-2 mt-4">HTML</h1>
        </motion.span>
          <motion.span  whileHover={{ rotate: 360, }}
          className="w-[120px] h-[120px] p-3 bg-zinc-950 flex flex-col items-center rounded-2xl">
            <FaCss3 color="#4285F4" size={50} />
            <h1 className="text-white ml-2 mt-4">CSS</h1>
          </motion.span>
          <motion.span  whileHover={{ rotate: 360, }}
          className="w-[120px] h-[120px] p-4 bg-zinc-950 flex flex-col items-center rounded-2xl">
            <FaReact color="#61DAFB" size={50} />
            <h1 className="text-white mt-4">React</h1>
          </motion.span >
          <motion.div  whileHover={{ rotate: 360, }}
          className="w-[120px] h-[120px] p-3 bg-zinc-950 flex flex-col items-center rounded-2xl">
           <div> <FaJs color="#FF9900" size={50} /> </div>
           <div><h1 className="text-white ml-2 mt-4">JavaScript</h1></div>
          </motion.div>
            <motion.span  whileHover={{ rotate: 360, }}
            className="w-[120px] h-[120px] p-3 bg-zinc-950 flex flex-col items-center rounded-2xl">
            <FaFigma color="#4285F4" size={50} />
            <h1 className="text-white ml-2 mt-4">Figma</h1>
          </motion.span> 
           <motion.span  whileHover={{ rotate: 360, }}
           className="w-[120px] h-[120px] p-3 bg-zinc-950 flex flex-col items-center rounded-2xl">
            <FaPython color="#a6b80c" size={50} />
            <h1 className="text-white ml-2 mt-4">Python</h1>
          </motion.span>
           <motion.span  whileHover={{ rotate: 360, }}
           className="w-[120px] h-[120px] p-3 bg-zinc-950 flex flex-col items-center rounded-2xl">
            <FaDesktop color="#4285F4" size={90} />
            <h1 className="text-white ml-2 mt-4">Hardware & Network</h1>
          </motion.span>
           <motion.span  whileHover={{ rotate: 360, }}
           className="w-[120px] h-[120px] p-3 bg-zinc-950 flex flex-col items-center rounded-2xl">
            <SiMongodb color="#4285F4" size={30} />
            <h1 className="text-white ml-2 mt-4">MongoDB</h1>
          </motion.span>
          <motion.span  whileHover={{ rotate: 360, }}
          className="w-[120px] h-[120px] p-3 bg-zinc-950 flex flex-col items-center rounded-2xl">
            <div className='flex'>
              <SiCplusplus color="#4285F4" size={30} />
            <SiC color="#4285F4" size={30} className="ml-2" />
            </div>
            <h1 className="text-white ml-2 mt-4">C & C++</h1>
          </motion.span>
        </motion.div>
        
        </div>
      </div>
  
  )
}

export default Skills
