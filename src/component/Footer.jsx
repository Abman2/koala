import React from 'react';
import logo from '../assets/koala.svg';
import discord from '../assets/social media asset/discord.svg';
import instagram from '../assets/social media asset/Instagram.svg';
import medium from '../assets/social media asset/medium.svg';
import telegram from '../assets/social media asset/telegram.svg';
import tiktok from '../assets/social media asset/tiktok.svg';
import youtube from '../assets/social media asset/youtube.svg';

export const Footer = () => {
     return (
          <div className='bg-indigo-800  text-white flex flex-col max-w-md lg:px-16 md:max-w-3xl lg:max-w-6xl   mx-auto rounded-3xl py-10'>
               <div className='flex border-b  flex-col lg:flex-row lg:justify-between  text items-center  '>
                    <div className=''>
                         <img src={logo} alt='' className='lg:h-8 h-6' />
                    </div>
                    <div className='flex items-center space-x-4 lg:space-x-10   my-7'>
                         <a href=''>
                              <img src={instagram} alt='' />
                         </a>
                         <a href=''>
                              <img src={tiktok} alt='' />
                         </a>
                         <a href=''>
                              <img src={youtube} alt='' />
                         </a>

                         <a href=''>
                              <img src={telegram} alt='' />
                         </a>
                         <a href=''>
                              <img src={discord} alt='' />
                         </a>
                         <a href=''>
                              <img src={medium} alt='' className='h-7' />
                         </a>
                    </div>
               </div>
               <div className='flex lg:flex-row justify-between items-center lg:h-20   flex-col-reverse  space-y-4'>
                    <p className='text-slate-400 my-2 '>Copyright © 2024 Eucalyptus Labs</p>
                    <p className=''>
                         <b className='text-slate-400 font-normal'>Powered</b> by Eucalyptus Labs
                    </p>
                    <div className='flex flex-col lg:flex-row lg:space-x-4 lg:space-y-0 items-center space-y-2'>
                         <a href=''>Asset</a>
                         <a href=''>Media</a>
                         <a href=''>Privacy Policy</a>
                    </div>
               </div>
          </div>
     );
};
