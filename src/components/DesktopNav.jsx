import React from 'react'
import { motion } from 'framer-motion'
import { navVariants } from '../framerMotion/motion'

function DesktopNav() {
  return (
    <>
    <motion.div
        variants={navVariants}
        initial="hidden"
        animate="show"
    >
        <div className="nav-bar hidden md:block fixed z-[9999] -top-4 left-1/2 -translate-x-1/2 lg:w-[40%] md:w-[40%] p-10">
        </div>
            <nav
                className="desk hidden md:block fixed z-[9999] top-8 left-1/2 -translate-x-1/2 lg:w-[35%] md:w-[45%] rounded-full bg-nav p-2"
            >
                <ul className="flex items-center justify-between text-gray-500 text-lg">
                    <li className='py-1'><a className='active rounded-full px-3 py-2' href="#home">Home</a></li>
                    <li className='py-1'><a className='rounded-full px-3 py-2' href="#about">About</a></li>
                    <li className='py-1'><a className='rounded-full px-3 py-2' href="#projects">Projects</a></li>
                    <li className='py-1'><a className='rounded-full px-3 py-2' href="#skills">Skills</a></li>
                </ul>
            </nav>
    </motion.div>
    </>
  )
}

export default DesktopNav