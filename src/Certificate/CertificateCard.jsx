import React from 'react'
import banner from "../assets/banner.jpg"

const CertificateCard = ({ title, main }) => {
  return (
     <div className="p-3 md:p-6 flex flex-col w-80  bg-[#171d32] shadow-xl shadow-slate-900 rounded-2xl">
         <div> 
        <img className='p-4' src={banner} alt="Project Image" />
          <h3 className="text-xl md:text-2xl font-bold text-white leading-relaxed px-4">{title}</h3>
          <p className="px-4 text-sm md:text-md leading-tight py-2">
            {main}
          </p>
          </div>
        
            <button className="w-full  text- white py-2 p-5 px-20 text-lg md:text-xl   hover:opacity-75 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">View</button>
          
        </div>
  )
}

export default CertificateCard
