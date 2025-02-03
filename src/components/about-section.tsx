'use client';

import React from 'react';
import { content } from '@/configs/content.config';
import { motion } from 'framer-motion';

const AboutSection = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const separatorVariants = {
    hidden: { scaleY: 0, opacity: 0 },
    visible: {
      scaleY: 1,
      opacity: 1,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const paragraphVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut', delay: 0.4 },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: 'easeOut', delay: 0.6 },
    },
  };

  return (
    <div className='h-screen w-screen bg-black overflow-hidden' id='about'>
      <div className='max-w-7xl w-full mx-auto px-12 py-24 flex flex-col items-start justify-center relative space-y-16'>
        <motion.h2
          variants={textVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          className='lg:text-5xl text-4xl font-black leading-tighter text-white'
        >
          <span className='font-light'>{content.about.title[0]}</span>
          <br />
          <span className='text-white lg:text-9xl text-5xl'>
            {content.about.title[1]}
          </span>
        </motion.h2>

        <div className='flex items-center max-w-4xl space-x-8'>
          <motion.div
            variants={separatorVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            className='h-32 bg-white/60 rounded-full w-1'
          ></motion.div>

          <motion.p
            variants={paragraphVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            className='text-white/70 md:text-xl text-lg'
          >
            {content.about.description}
          </motion.p>
        </div>

        <motion.div
          variants={imageVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          className="relative w-full h-96 bg-cover bg-center rounded-3xl shadow-lg bg-[url('/images/about-image.jpg')]"
        ></motion.div>
      </div>
    </div>
  );
};

export default AboutSection;
