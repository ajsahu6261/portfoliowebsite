import React from 'react'
import {
  FaGithub,
  FaLinkedin,
  FaArrowUp,
  FaInstagram,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
    const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#Home" },
    { name: "About", href: "#About" },
    { name: "Skills", href: "#Skills" },
    { name: "Projects", href: "#Projects" },
    { name: "Contact", href: "#Contact" },
  ];
  return (
    
   <footer className="bg-gray-950 text-white">
      <div className="max-w-6xl mx-auto px-6 py-12">

        {/* Main Footer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* About */}
          <div>
            <h2 className="text-2xl font-bold">
              Ajay <span className="text-blue-500">Sahu</span>
            </h2>

            <p className="text-gray-400 mt-4 leading-7">
              Aspiring Full Stack Developer passionate about
              building modern web applications and solving
              real-world problems through technology.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Connect With Me
            </h3>

            <p className="text-gray-400 mb-4">
              Let's connect and build something meaningful.
            </p>

            <div className="flex items-center gap-5 text-2xl">
              <a
                href="https://github.com/ajsahu6261"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/ajay1442015"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <FaLinkedin />
              </a>

              <a
                href="mailto:ajaysahu1442015@gmail.com"
                aria-label="Email"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <HiOutlineMail />
              </a>
              <a
                href="https://www.instagram.com/_aj_144?stkn=cTBpd3Z0M2Zkb3Br"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-10 pt-6
                        flex flex-col sm:flex-row items-center
                        justify-between gap-4">

          <p className="text-gray-500 text-sm text-center">
            © {currentYear} Ajay Sahu. All Rights Reserved.
          </p>

          <a
            href="#Home"
            aria-label="Back to top"
            className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition-colors"
          >
            <FaArrowUp />
          </a>
        </div>

      </div>
    </footer>

      // <div className='w-1/2 text-gray-800 leding-wide p-2 w-11 flex-2 md:flex-col'>
      //  <h2 className='text-2xl md:text-3xl my-2 ml-8 font-semibol'>contact</h2>
      // <ul className='flex  '>
       
      //   <a href="Https://wa.me/+916261475554"><li className='m-3 cursor-pointer'><FaWhatsapp size={30} color='green'/></li></a>
      //  <a href="https://www.facebook.com/profile.php?id=61595073864967"> <li className='m-3 cursor-pointer'><FaFacebook size={30} color='blue'/></li></a>
      //  <a href="www.linkedin.com/in/ajay1442015"> <li className='m-3 cursor-pointer'><FaLinkedin size={30} color='blue'/></li></a>
      //  <a href="https://www.instagram.com/_aj_144?stkn=cTBpd3Z0M2Zkb3Br"> <li className='m-3 cursor-pointer'><FaInstagram size={30} color='blue'/></li></a>
      //   </ul>
      //    </div>


   
  )
}

export default Footer
