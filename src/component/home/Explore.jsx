import React from 'react';
import koala from '../../assets/speciality asset/koalapanda.svg';
import { Link } from 'react-router-dom';
export const Explore = () => {
     return (
          <div className='flex flex-col justify-center items-center '>
               <div className='my-16'>
                    <img src={koala} alt='koalapanda' />
               </div>
               <div className='text-white  text-center space-y-5'>
                    <h1 className='text-4xl lg:text-5xl font-black text-wrap'>Explore with your Koala Wallet</h1>
                    <p className='font-semibold text-xl lg:text-2xl '>Enter the Crypto Ecosystem Today</p>
                    <Link to='../downloadApp'>
                         <button className='text-center bg-pink-600 h-14 w-[182px] my-14 font-semibold  rounded-full  '>
                              Download App
                         </button>
                    </Link>
               </div>
          </div>
     );
};
