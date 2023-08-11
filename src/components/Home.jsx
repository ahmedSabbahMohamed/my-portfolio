'use client';

import React from 'react'
import { GoLinkExternal } from "react-icons/go"
import home from "../assets/images/home.png"
import { easeInOut, motion } from 'framer-motion'
import { fadeIn, staggerContainer } from '../framerMotion/motion';

function Home() {
  return (
    <section id='home'>
            <motion.div
              variants={ staggerContainer }
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.25 }}
              className='w-full min-h-screen overflow-hidden grid items-center'
            >
              <div className="max-w-[992px] mx-auto flex flex-col-reverse md:flex-row gap-5 justify-between items-center px-2 mt-16">
      
                <motion.div
                  variants={fadeIn("left", "tween", .1, .9)}
                  className="flex-1 text-center md:text-left"
                >
                  <h1 className="text-4xl font-bold text-slate-600">Ahmed Sabbah Mohamed</h1>
                  <h5 className="text-lg mb-5 mt-0 font-normal text-neutral-400">Frontend Developer</h5>
                    <motion.a
                      whileTap={{ scale: .8 }}
                      whileHover={{ scale: 1.1 }}
                        transition={{
                          type: "spring",
                          duration: .3,
                          ease: easeInOut,
                          stiffness: 300
                        }}
                      href="https://docs.google.com/document/d/130sJlJumPtgv1R5bIlJCQBqSmf3ssKFj9vdNJbEew6Y/edit?usp=drive_link"
                      target='_blank'
                      className='flex flex-row gap-1 items-center justify-center font-medium w-1/3 mx-auto md:mx-0 mt-3 text-lg rounded-md bg-blue-400 text-white p-2 border-2 border-blue-400 shadow-md hover:shadow-lg'
                    >
                    <span className='inline-block'>Resume</span>
                    <span className='inline-block'><GoLinkExternal /></span>
                    </motion.a>
                </motion.div>
      
                <motion.div
                  variants={fadeIn("right", "tween", .1, .9)}
                  className="flex-1"
                >
                  <img
                    src={ home }
                    alt="home-img" />
                </motion.div>
      
              </div>
            </motion.div>
    </section>
  )
}

export default Home