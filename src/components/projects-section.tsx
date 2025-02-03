'use client';

// import Link from 'next/link';
import React from 'react';
import { content } from '@/configs/content.config';
import { motion } from 'framer-motion';

const ProjectsSection = () => {
  // const container = {
  //   hidden: { opacity: 0 },
  //   visible: {
  //     opacity: 1,
  //     transition: {
  //       staggerChildren: 0.2,
  //       duration: 0.8,
  //       ease: 'easeOut',
  //     },
  //   },
  // };

  const child = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <div className='h-auto w-screen bg-black my-96' id='projects'>
      <div className='max-w-7xl mx-auto px-6 md:px-12 flex flex-col space-y-16'>
        <motion.h2
          variants={child}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          className='text-4xl lg:text-5xl font-black text-white text-left'
        >
          <span className='font-light'>{content.projects.title[0]}</span>
          <br />
          <span className='text-white text-6xl lg:text-9xl'>
            {content.projects.title[1]}
          </span>
        </motion.h2>

        <motion.p
          variants={child}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          className='text-white/70 md:text-lg text-base text-left max-w-3xl'
        >
          {/* {content.projects.description} */} There are currently no featured
          projects. Check back later!
        </motion.p>

        {/* <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full"
        >
          <motion.div
            variants={child}
            className="relative col-span-1 md:col-span-2 bg-black border border-zinc-800 rounded-3xl overflow-hidden cursor-pointer hover:shadow-lg transition-transform duration-300"
          >
            <Link href={content.projects.items[0].link}>
              <img
                src={content.projects.items[0].image}
                alt={content.projects.items[0].title}
                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/60 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-2xl font-semibold text-white">
                  {content.projects.items[0].title}
                </h3>
                <p className="text-white/70 text-sm">
                  {content.projects.items[0].description}
                </p>
              </div>
            </Link>
          </motion.div>

          {content.projects.items.slice(1, 3).map((project, index) => (
            <motion.div
              key={index}
              variants={child}
              className="relative col-span-1 bg-black border border-zinc-800 rounded-3xl overflow-hidden cursor-pointer hover:shadow-lg transition-transform duration-300"
            >
              <Link href={project.link}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/60 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-xl font-semibold text-white">
                    {project.title}
                  </h3>
                  <p className="text-white/70 text-sm">{project.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div> */}
      </div>
    </div>
  );
};

export default ProjectsSection;
