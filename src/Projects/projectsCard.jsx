import React from 'react'
import banner from "../assets/banner.jpg"

const ProjectsCard = ({ title, main }) => {
  return (
    <div className="p-3 md:p-6 flex flex-col w-80  bg-[#171d32] shadow-xl shadow-slate-900 rounded-2xl">
      <img className='p-4' src={banner} alt="Project Image" />
      <h3 className="text-xl md:text-2xl font-bold text-white leading-relaxed px-4">{title}</h3>
      <p className="px-4 text-sm md:text-md leading-tight py-2">
        {main}
      </p>
      <div className="mt-2 p-2 md:p-4 flex gap-2 md:gap-4 ">
        <button className="md:mt-10 text- white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-75 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">demo</button>
        <button className="md:mt-10 text- white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-75 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">source</button>
      </div>
    </div>
  )
}

export default ProjectsCard
