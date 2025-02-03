'use client';

import React from 'react';
import { content } from '@/configs/content.config';
import { Mail } from 'lucide-react';

const ContactSection = () => {
  return (
    <div className='h-auto w-screen bg-black py-24' id='contact'>
      <div className='max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center justify-center'>
        <div className='text-center space-y-6 max-w-2xl'>
          <h2 className='text-4xl md:text-5xl font-black text-white'>
            {content.contact.title[0]} <br />
            <span className='text-white/70'>{content.contact.title[1]}</span>
          </h2>
          <p className='text-white/70 md:text-lg'>
            {content.contact.description}
          </p>

          <a
            href='mailto:hello@alexkuchar.com'
            className='inline-flex items-center gap-2 bg-white text-black py-3 px-6 rounded-lg font-semibold hover:bg-white/90 transition-all'
          >
            <Mail size={20} />
            Send Email
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
