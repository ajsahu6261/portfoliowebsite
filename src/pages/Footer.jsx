import React from 'react'
import { FaInstagram, FaWhatsapp} from 'react-icons/fa'
import { FaGit } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    
    <div className= "width-full h-auto bg-gray-200 font-semibold p-5 flex justify-betbeen items-center m-0" >
      <div className='w-1/2 text-gray-800 leding-wide p-2 text-center w-14 flex-1 '>
      <ul>
        <a href="#Home"><li className='mt-2 text-lg  '>Home</li></a>
        <a href="#About"><li className='mt-2 text-lg md:lg'>About</li></a>
        <a href='#Exprince'><li className='mt-2 text-lg md:lg'>Exprince</li></a>
        <a href='#contact'><li className='mt-2 text-lg md:lg'>Contact</li></a>
        <a href='#Skills'><li className='mt-2 text-lg md:lg'>Skills</li></a>
        </ul>
         </div>

      <div className='w-1/2 text-gray-800 leding-wide p-2 w-75 flex-1 md:flex-col'> 
      <ul>
        <li className='font-bold text-lg md:text-xl'>Add:- <span className=' font-normal ml-2 text-md mt-3 md:text-lg'>36D Rishi Palace Dwarkapuri Indore </span></li>
        <li className='font-bold text-lg md:text-xl'>Website:- <span className=' font-normal ml-2 text-md mt-3 md:text-lg'>www.ajaysahuportfolio.com</span></li>
        <li className='font-bold text-lg md:text-xl'>Mail:- <span className=' font-normal ml-2 text-md mt-3 md:text-lg'>ajaysahu1442015@gmail.com</span></li>
        <li className='font-bold text-lg md:text-xl'>NO. <span className=' font-normal ml-2 text-md mt-3 md:text-lg'>6261475554</span></li>
        </ul>
        </div>

      <div className='w-1/2 text-gray-800 leding-wide p-2 w-11 flex-2 md:flex-col'>
       <h2 className='text-2xl md:text-3xl my-2 ml-8 font-semibol'>contact</h2>
      <ul className='flex  '>
       
        <a href="Https://wa.me/+916261475554"><li className='m-3 cursor-pointer'><FaWhatsapp size={30} color='green'/></li></a>
       <a href="https://www.facebook.com/profile.php?id=61595073864967"> <li className='m-3 cursor-pointer'><FaFacebook size={30} color='blue'/></li></a>
       <a href="www.linkedin.com/in/ajay1442015"> <li className='m-3 cursor-pointer'><FaLinkedin size={30} color='blue'/></li></a>
       <a href="https://www.instagram.com/_aj_144?stkn=cTBpd3Z0M2Zkb3Br"> <li className='m-3 cursor-pointer'><FaInstagram size={30} color='blue'/></li></a>
        </ul>
         </div>


    </div>
   
  )
}

export default Footer
