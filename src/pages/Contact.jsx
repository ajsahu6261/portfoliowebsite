import React from 'react'
import { FaPhone } from 'react-icons/fa'
import { FaMailBulk } from 'react-icons/fa'
import { motion } from 'framer-motion'
const Contact = () => {
  return (
    <motion.div  id="contact" className="width-full h-full text-white overflow-hidden text-center bg-black hover:bg-[#020617] shadow-xl mx-0 md:mx-20 bg-opacity-30 p-2 py-12 rounded-lg">
     <h1 className="text-4xl font-bold my-8 leading-normal tracking-wide text-[#2563eb]"> Contact </h1>
     <div className='m-3  mt-0 md:mt-3 flex flex-col md:justify-between md:items-center md:flex-row '>
      <div className='flex-col mr-2'>
        <div className='flex'>
      <FaPhone color="#2563eb" size={20}/><h2 className="ml-2 text-lg font-semibold leading-normal tracking-wide text-white">  <span className='text-[#2563eb] font-semibol text-2xl md:text-xl mx-2'>Contact Number :- </span> 6261475554 </h2>
      </div>
      <div className='flex'>
      <FaMailBulk color="#2563eb" size={20} />
      <h2 className="text-lg font-semibold leading-normal tracking-wide text-white">
         <span className='text-[#2563eb] font-semibol text-2xl md:text-xl mx-2'>Contact Mail :- </span>ajaysahu1442015@gmail.com </h2>
      </div>
      </div>
      <form action="ajaysahu1442015@gmail.com" className='rounded-xl border-2 mt-5 md:mt-2 border-solid border-blue-500  py-2 shadow-xl text-center flex flex-col  md:w-2/4'>
        <h2 className='font-bold text-2xl text-[#2563eb] my-4'>Enqury form </h2>
        <input type="text" placeholder='Name' className='bg-white border-2 rounded-xl px-4 m-2 text-lg md:text-xl text-blue-900' />
        <input type="text" placeholder='Last' className='bg-white border-2 rounded-xl px-4 m-2 text-lg md:text-xl text-blue-900' />
        <input type="number" placeholder='Mobile Number' className='bg-white border-2 rounded-xl px-4 m-2 text-lg md:text-xl text-blue-900' />
        <input type="mail" placeholder='Mail' className='bg-white border-2 rounded-xl px-4 m-2 text-lg md:text-xl text-blue-900' />
        <textarea rows={4} cols={60}  className='bg-white border-2 rounded-xl text-black text-lg'></textarea>
        <button className='bg-[#2563eb] p-2  mt-5 md:-2 rounded-xl font-bold '>Sumbit details</button>
      </form>
     </div>
    </motion.div>
  )
}

export default Contact
