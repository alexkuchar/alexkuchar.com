'use client';

import ButtonWithArrow from './ui/button-with-arrow';
import React from 'react';
import { content } from '@/configs/content.config';
import { motion } from 'framer-motion';

// const customerImages = [
//   "https://images.pexels.com/photos/17642974/pexels-photo-17642974/free-photo-of-brunette-woman-standing-on-a-lawn-wearing-a-black-bandeau-dress.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//   "https://images.pexels.com/photos/18355489/pexels-photo-18355489/free-photo-of-woman-in-a-black-dress-standing-in-front-of-a-window.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//   "https://images.pexels.com/photos/8975632/pexels-photo-8975632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//   "https://images.pexels.com/photos/30260829/pexels-photo-30260829/free-photo-of-stylish-woman-relaxing-on-a-modern-sofa.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//   "https://images.pexels.com/photos/19210626/pexels-photo-19210626/free-photo-of-a-woman-laying-on-the-ground-with-flowers.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
// ];

const HeroSection = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.5,
      },
    },
  };

  const child = {
    hidden: { opacity: 0, y: 50, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.6,
        ease: 'easeInOut',
      },
    },
  };

  const background = {
    hidden: { opacity: 0, scale: 1.2 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1.5, ease: 'easeInOut' },
    },
  };

  const button = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <div className='h-[calc(100vh-73px)] w-screen'>
      <motion.div
        variants={background}
        initial='hidden'
        animate='visible'
        className='absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#111111_1px,transparent_1px),linear-gradient(to_bottom,#111111_1px,transparent_1px)] bg-[size:12rem_12rem]'
      >
        <div className='absolute bottom-0 left-0 right-0 top-0 md:bg-[radial-gradient(circle_40vw_at_100%_200px,#e0f2fe3f,transparent)] bg-[radial-gradient(circle_80vw_at_100%_200px,#e0f2fe3f,transparent)]'></div>
      </motion.div>

      <div className='max-w-7xl w-full mx-auto px-12 h-full flex flex-col items-center justify-center relative'>
        <motion.div
          variants={container}
          initial='hidden'
          animate='visible'
          className='relative space-y-12 flex flex-col items-center justify-center'
        >
          <motion.h1 className='lg:text-9xl font-semibold text-white/70 hover:text-white transition-all duration-300 leading-tighter md:text-7xl text-5xl'>
            {content.hero.title.map((part, index) => {
              if (typeof part === 'string') {
                return (
                  <motion.span key={index} variants={child}>
                    {part}{' '}
                  </motion.span>
                );
              } else {
                return (
                  <motion.span
                    key={index}
                    variants={child}
                    className={part.style}
                  >
                    {part.text}{' '}
                  </motion.span>
                );
              }
            })}
          </motion.h1>

          {/* <motion.div
            variants={container}
            className="flex flex-col md:flex-row gap-4"
          >
            <motion.div className="flex -space-x-4">
              {customerImages.map((image, index) => (
                <motion.img
                  key={index}
                  src={image}
                  alt=""
                  variants={child}
                  className="h-12 w-12 rounded-full shadow-md border-white object-cover"
                />
              ))}
            </motion.div>
            <motion.div className="flex flex-col" variants={child}>
              <p className="text-white/70">Trusted by</p>
              <p className="text-white font-semibold italic">
                +{content.hero.customerCount} customers
              </p>
            </motion.div>
          </motion.div> */}

          <motion.div variants={button}>
            <ButtonWithArrow text={content.hero.buttonText} link='/' />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
