import React from 'react'
import ProjectsCard from "./projectsCard"
import { motion } from 'framer-motion'

const projects = () => {
  return (
    <motion.div 
            
            initial={{ opacity: 0, y: 40 }}
         whileInView={{ opacity: 1, y: 0 }} 
         viewport={{ once: true }} 
         transition={{ duration: 0.6 }}
         whileHover={{ scaleX: 1.03, y: -10, }} id="Projects" className="p-10 md:p-24 text-white">
      <h1 className="text-2xl md:text-4xl font-bold text-center text-white">Projects</h1>
     <div className="py-12 px-8 flex flex-wrap gap-5">
      <ProjectsCard title={"Portfolio Website" }
      main={"this is a portfolio website creat in next js and use some componet library"} />

      <ProjectsCard title={"CRM Website" }
      main={"this is a portfolio website creat in next js and use some componet library"} />

      <a href='https://ajsahu6261.github.io/turist-trip/'>
     <ProjectsCard title={"Tourism Website" }
      main={"this is a portfolio website creat in next js and use some componet library"} />
      </a>
    </div>
    </motion.div>
  )
}

export default projects
