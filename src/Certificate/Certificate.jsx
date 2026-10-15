import React from 'react'
import CertificateCard from '../Certificate/CertificateCard'
import webdev from "../assets/wab development.pdf"
import ai from "../assets/AJAY SAHU (1).pdf"
import programming from "../assets/Eplg.jpeg"
import EducationCard from './EducationCard'

const Certificate = () => {
  return (
    <div id="Education" className="w-screen h-auto md:h-full text-white  gap-8 md:gap-12 p-4 md:p-12 flex flex-wrap justify-center items-center">
    <h1 className="text-2xl md:text-4xl font-bold text-center text-white"> Certificates & Education </h1>
    <div className="w-screen h-auto md:h-full text-white  gap-8 md:gap-12 p-4 md:p-12 flex flex-wrap justify-center items-center">
     <a href={webdev} target="_blank" rel="noopener noreferrer">
        <EducationCard title={"MCA"} 
          main={"master of computer applications from Sage university indore 2024-2026"} />
      </a>
      
      <a href={ai} target="_blank" rel="noopener noreferrer">
        <EducationCard title={"B.com"} 
          main={"bachelor of commerce from Davv university indore 2021-2024"} />
      </a>

    
     <a href={programming} target="_blank" rel="noopener noreferrer">
        <EducationCard title={"DCA"} 
          main={"diploma in computer applications from Makhanlal Chaturvedi university indore 2021-202"} />
      </a>

   </div>
    <div className="w-screen h-auto md:h-full text-white  gap-8 md:gap-12 p-4 md:p-12 flex flex-wrap justify-center items-center">
     <a href={webdev} target="_blank" rel="noopener noreferrer">
        <CertificateCard title={"Web Design & Development"} 
          main={"this is a sample description for the web design and development certificate from online courses digital india"} />
      </a>
      
      <a href={ai} target="_blank" rel="noopener noreferrer">
        <CertificateCard title={"AI- Developing Next Generation Building a RAG System"} 
          main={"This is a sample description for the AI certificate from sage university indore"} />
      </a>

    
     <a href={programming} target="_blank" rel="noopener noreferrer">
        <CertificateCard title={"Enhancing Power of Programming Through Logic Building"} 
          main={"This is a sample description for the programming certificate from sage university indore"} />
      </a>

   </div>
   </div>
  )
}

export default Certificate 

