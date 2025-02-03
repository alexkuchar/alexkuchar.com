'use client';

import { AlignRight } from 'lucide-react';
import Link from 'next/link';
import Logo from './logo';
import { motion } from 'framer-motion';
import { useState } from 'react';

const navItems = [
  {
    label: 'home',
    link: '/',
  },
  {
    label: 'about',
    link: '/#about',
  },
  {
    label: 'projects',
    link: '/#projects',
  },
  {
    label: 'contact',
    link: '/#contact',
  },
];

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  const containerVariants = {
    hidden: {
      height: 0,
      opacity: 0,
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1,
      },
    },
    visible: {
      height: 'auto',
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: -20,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <>
      <div className='w-screen bg-black border-b border-zinc-700 overflow-hidden'>
        <div className='max-w-7xl w-full mx-auto px-12 py-4 flex items-center justify-between'>
          <Link
            href='/'
            className='flex items-center text-lg text-white font-semibold'
          >
            <Logo width='w-8' />
            <span>ALEX KUCHAR</span>
          </Link>

          <div className='md:flex hidden gap-2'>
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className='text-white font-semibold py-2 px-4 rounded-full hover:bg-white/10 transition-all duration-300 lowercase'
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className='flex items-center justify-center gap-4'>
            <Link href='/contact' className='btn'>
              Get in Touch
            </Link>

            <button
              className='md:hidden text-white flex flex-col'
              onClick={toggleMenu}
            >
              <AlignRight className='size-8' />
            </button>
          </div>
        </div>
      </div>

      <motion.div
        variants={containerVariants}
        initial='hidden'
        animate={isActive ? 'visible' : 'hidden'}
        className='md:hidden h-screen overflow-hidden px-8 bg-black'
      >
        <motion.div className='flex flex-col gap-2'>
          {navItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className='overflow-hidden py-4'
            >
              <Link
                href={item.link}
                className='text-white font-semibold py-2 px-4 rounded-full hover:bg-white/10 transition-all duration-300 lowercase text-center'
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </>
  );
};

export default Navbar;
