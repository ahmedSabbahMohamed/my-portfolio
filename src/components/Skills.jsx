'use client'

import React from 'react'
import { FaHtml5, FaCss3Alt, FaReact, FaSass, FaBootstrap, FaGithub } from "react-icons/fa"
import { SiJavascript, SiTailwindcss } from "react-icons/si"
import { DiResponsive } from "react-icons/di"
import { BiLogoRedux } from "react-icons/bi"
import { motion } from 'framer-motion'
import { fadeIn, staggerContainer } from '../framerMotion/motion'

function Skills() {
  return (
    <section id='skills'>
    <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: .25 }}
        className='my-skills min-h-screen flex justify-center items-center flex-col text-center'
    >
      <motion.h2
        variants={fadeIn("up", "tween", .4, .7)}
        initial="hidden"
        whileInView="show"
        className='text-red-400 text-3xl mb-20 font-semibold md:text-5xl uppercase'      
      >
        my skills
      </motion.h2>
      <motion.div
        variants={fadeIn("up", "tween", .5, .7)}
        initial="hidden"
        whileInView="show"
      >
        <ul className='max-w-3xl mx-auto flex items-center justify-center px-2 gap-8 flex-row flex-wrap'>
          <li className='skill'><span className='text-orange-600'><FaHtml5 /></span>HTML</li>
          <li className='skill'><span className="text-blue-600"><FaCss3Alt /></span>CSS</li>
          <li className='skill'><span className="text-yellow-600"><SiJavascript /></span>JS</li>
          <li className='skill'><span className="text-cyan-500"><FaReact /></span>ReactJS</li>
          <li className='skill'><span className="text-pink-600"><FaSass /></span>SASS</li>
          <li className='skill'><span className="text-blue-500"><SiTailwindcss /></span>Tailwind css</li>
          <li className='skill'><span className="text-violet-600"><FaBootstrap /></span>Bootstrap</li>
          <li className='skill'><span className="text-gray-900"><FaGithub /></span>Github</li>
          <li className='skill'><span className='text-6xl'><DiResponsive /></span> Responsive web design</li>
          <li className='skill'><span className="text-teal-600"><BiLogoRedux /></span>Redux, redux-toolkit</li>
        </ul>
      </motion.div>
    </motion.div>
    </section>
  )
}

export default Skills