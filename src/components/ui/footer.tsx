'use client';

import Link from 'next/link';
import React from 'react';
import { content } from '@/configs/content.config';

const Footer = () => {
  return (
    <footer className='w-full bg-black py-12'>
      <div className='max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-start text-center md:text-left'>
        <div>
          <h3 className='text-white text-2xl font-bold'>
            {content.footer.brand.name}
          </h3>
          <p className='text-white/70 text-sm mt-4'>
            {content.footer.brand.description}
          </p>
        </div>

        <div>
          <h4 className='text-white/80 text-lg font-semibold'>Navigation</h4>
          <ul className='space-y-2 mt-4'>
            {content.footer.navigation.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.label}
                  className='text-white/70 hover:text-white'
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className='text-white/80 text-lg font-semibold'>Follow Us</h4>
          <ul className='space-y-2 mt-4'>
            {content.footer.socials.map((social, index) => (
              <li key={index}>
                <Link
                  href={social.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-white/70 hover:text-white'
                >
                  {social.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className='mt-8 border-t border-zinc-800 pt-6 text-center'>
        <p className='text-white/50 text-sm'>
          &copy; {new Date().getFullYear()} {content.footer.copyright}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
