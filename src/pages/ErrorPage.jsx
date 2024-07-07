import React from 'react';
import koalaError from '../assets/koala-error.svg';
import { Link } from 'react-router-dom';
import { NavBar } from '../component/NavBar';

import { Footer } from '../component/Footer';

export const ErrorPage = () => {
     return (
          <>
               <NavBar />

               <div className='h-screen flex justify-center items-center flex-col lg:max-w-6xl mx-auto text-white'>
                    <div className=''>
                         <img src={koalaError} alt='' className='' />
                    </div>
                    <div className='text-center space-y-5 font-semibold'>
                         <h1 className='text-white font-black text-5xl'>Page not found</h1>
                         <p>We couldn't find what you were looking for.</p>
                         <p>Let's take you back home.</p>
                         <Link to='/' className='block'>
                              <button className='rounded-full px-6 py-3 bg-slate-800'>Home</button>
                         </Link>
                    </div>
               </div>
               <Footer />
          </>
     );
};
