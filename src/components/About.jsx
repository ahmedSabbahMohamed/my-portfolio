'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { staggerContainer, fadeIn } from '../framerMotion/motion'

function About() {
  return (
    <section id='about'>
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className="about w-full min-h-screen overflow-hidden grid items-center"
        >
            <motion.div
                variants={fadeIn('up', 'tween', .5, 1)}
                className='max-w-[992px] mx-auto text-center'
            >
                <h2 className='text-teal-400 text-3xl font-semibold md:text-5xl uppercase my-4'>About me</h2>
                <p className='text-gray-500 md:text-2xl py-2 px-4'>
                    Front-end developer. Bachelor of Science in Computers, Artificial Intelligence (Expected Graduation Date: 2024) Damanhur University. I like creating responsive websites and web applications using HTML, CSS, and
                    JavaScript. Skilled in ReactJS, Bootstrap, and Figma, and passionate about creating user-friendly and
                    accessible web experiences. And i take certificate in front-end development from meta. You can see certificate from this link 
                    <a href="shrtco.de/kCjxIV" className='text-cyan-500 underline ml-4'>shrtco.de/kCjxIV</a>
                </p>
            </motion.div>
        </motion.div>
    </section>
  )
}

export default About