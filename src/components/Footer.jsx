import React from 'react'
import { FaLinkedin, FaGithub } from "react-icons/fa"
import { SiFrontendmentor } from "react-icons/si"
import { motion } from 'framer-motion'
import { footerVariants } from "../framerMotion/motion"

function Footer() {
  return (
    <>
    <motion.footer
        variants={ footerVariants }
        initial="hidden"
        animate="show"
        className='fixed z-50 left-[35%] md:left-[45%] bottom-0 -translate-x-1/2'
    >
        <div className="flex gap-8 pb-6">
            <a href='https://www.linkedin.com/in/a7medsabbah' target='_blank' rel="noreferrer"  className="inline-block text-blue-700 text-2xl">
                <FaLinkedin />
            </a>
            <a href='https://github.com/ahmedSabbahMohamed' target='_blank' rel="noreferrer" className="inline-block text-gray-950 text-2xl">
            <FaGithub />
            </a>
            <a href='https://www.frontendmentor.io/profile/ahmedSabbahMohamed' target='_blank' rel="noreferrer" className="inline-block text-gray-500 text-2xl">
            <SiFrontendmentor />
            </a>
        </div>
    </motion.footer>
    </>
  )
}

export default Footer