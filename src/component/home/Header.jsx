import React from 'react';
import phone from '../../assets/phone.png';
import { Browsers } from './Browsers';
import { Link } from 'react-router-dom';
export const Header = () => {
     return (
          <section className='bgimage flex flex-col mx-auto md:flex-row text-center  md:text-left md:max-w-6xl max-h-[190vh] md:max-h-[120vh] md:pt-16  md:justify-between font-sans relative'>
               <div className='h-1/2 md:h-full md:w-1/2 flex flex-col justify-center items-center md:items-start px-10 pt-16 md:pt-0 space-y-8  md:space-y-6'>
                    <p className=' uppercase text-pink-500  text-xs md:text-sm -mb-4'>your keys, your coins, your koala wallet</p>
                    <h1 className='text-5xl lg:text-7xl    text-white font-bold  leading-snug md:leading-[70px] '>
                         Your Passport to the <b className='text-pink-500 lead tracking-tight'>Crypto Ecosystem</b>
                    </h1>
                    <small className='md:text-[19px] text-base text-slate-400  font-semibold '>
                         Koala Wallet makes it easier than ever to buy, send, receive, and safely store your crypto assets.
                    </small>
                    <Link
                         to='downloadApp'
                         className='mx-auto md:mx-0 md:w-52 text-center bg-pink-500 p-5 rounded-full text-white font-bold'>
                         <button>Download App</button>
                    </Link>
                    <Browsers />
               </div>
               <div className='h-1/2  md:w-1/2 px-10 mx-auto md:px-3 my-12    items-center flex'>
                    <img src={phone} alt='' className=' w-11/2' />
               </div>
          </section>
     );
};
