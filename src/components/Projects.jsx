'use client'

import React from 'react'
import data from "../data.json"
import { motion } from 'framer-motion'
import { fadeIn, staggerContainer } from '../framerMotion/motion'

function Projects() {
    const projects = data.map(project => {
        return(
            <>
            <motion.a
                variants={fadeIn("up", "tween", .3, .9)}
                initial="hidden"
                whileInView="show"
                key={project.id}
                href={project.url}
                target='_blank'
                rel="noreferrer" 
                className='max-w-3xl mx-auto'
                >
                <div
                    className='project overflow-hidden border border-slate-300 rounded-lg min-h-[400px] lg:max-w-3xl md:max-w-xl mx-5 md:mx-auto flex justify-between items-center flex-col-reverse md:flex-row hover:bg-gray-300 hover:scale-105 transition-all ease-in-out duration-300 hover:shadow-lg'
                >

                    <div className="desc md:flex-1 h-full w-full text-left p-6">
                        <h3 className="project-name text-gray-600 text-2xl pb-4">{project.title}</h3>
                        <p className='text-gray-500'>{project.desc}</p>
                        <div className="">
                            <div className="tools flex-1">
                                <ul className='flex flex-wrap gap-4 my-4'>
                                    {project.tools.map(tool => {
                                        return(
                                            <>
                                            <li className='tool'>{tool}</li>
                                            </>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className='md:flex-1 h-60 w-full md:min-h-[400px] relative overflow-hidden'>
                    <div
                        style={{backgroundImage: `url(${require(`../assets/images/${project.image}`)})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center"}}
                        className="image absolute w-full h-full md:top-10 md:rounded-lg rounded-t-lg md:left-8"
                    ></div>
                </div>

                </div>
            </motion.a>
            </>
        )
    })
    return(
        <section id='projects'>
        <motion.div
            variants={ staggerContainer }
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: .25 }}
            className="projects min-h-[50vh] pt-24 mb-24"
        >
            <motion.h2
                variants={fadeIn("up", "tween", .2, 1)}
                initial="hidden"
                whileInView="show"
                className='text-3xl text-center my-8 pt-20 pb-8 text-violet-500 font-semibold md:text-5xl uppercase'
            >
                My projects
            </motion.h2>
            <div
                className="flex flex-col gap-12"
            >
                {projects}
            </div>
            <div className='text-center my-12'>
                <a
                    href="https://www.frontendmentor.io/home/my-challenges?tab=completed"
                    target='_blank'
                    rel="noreferrer" 
                    className='text-gray-600 font-semibold relative after:content[""] after:w-0 after:bg-red after:absolute after:h-[2px] after:bg-blue-600 after:-bottom-2 after:-left-1 hover:after:w-20 after:transition-all after:duration-300 hover:text-gray-950'
                >
                    See More
                </a>
            </div>
        </motion.div>
        </section>
    )
}

export default Projects