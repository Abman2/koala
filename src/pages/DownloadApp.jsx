import React from 'react';
import koala from '../assets/Download/koala-with-phone.png';
import appstore from '../assets/Download/appstore.png';
import googlePlay from '../assets/Download/googleplay.png';
import iconPc from '../assets/Download/icon-pc.svg';
import iconMobile from '../assets/Download/icon-mobile.efd1cc72.svg';
import chrome from '../assets/Download/chrome.png';
import edge from '../assets/Download/edge.png';
import brave from '../assets/Download/brave.png';
export const DownloadApp = () => {
     return (
          <section className='max-w-sm md:max-w-7xl mx-auto lg:mb-28 mb-10'>
               <article className='text-white text-center py-16   flex flex-col items-center justify-center'>
                    <div className='mx-auto'>
                         <img src={koala} alt='' className=' mx-auto max-h-96' />
                    </div>
                    <div className='space-y-5 '>
                         <h1 className='text-3xl lg:text-5xl font-black'>
                              Download <b className='text-pink-600'>Koala Wallet</b>
                         </h1>
                         <p className='text- text-slate-300 font-semibold'>
                              Start your crypto journey today with the safe and easy to use Koala Wallet. Available for mobile and web!
                         </p>
                    </div>
               </article>
               <article className=' grid gap-10 text-white max-w-md md:max-w-6xl mx-auto xl:max-w-7xl'>
                    <aside className='border border-slate-800 space-y-5 lg:space-y-0 rounded-3xl flex flex-col lg:flex-row   bg-slate-900 items-center justify-center p-10 px-14'>
                         <div className=''>
                              <div className='flex space-x-2 mb-2'>
                                   <img src={iconMobile} alt='' />
                                   <h1 className='text-3xl font-bold'>Mobile</h1>
                              </div>
                              <p className='text-lg text-slate-300 lg:pr-28'>
                                   Manage your crypto assets on the go with Koala Wallet for mobile!
                              </p>
                         </div>
                         <div className=' flex space-x-10 items-center justify-end w-full '>
                              <p>
                                   {' '}
                                   <img src={googlePlay} alt='' className='max-h-20' />
                              </p>
                              <p>
                                   {' '}
                                   <img src={appstore} alt='' className='max-h-20' />
                              </p>
                         </div>
                    </aside>
                    <aside className='border border-slate-800 rounded-3xl flex space-y-5 lg:space-y-0 flex-col md:flex-row  bg-slate-900 items-center justify-center p-10 lg:px-14'>
                         <div className=''>
                              <div className='flex space-x-2 mb-2'>
                                   <img src={iconPc} alt='' />
                                   <h1 className='text-3xl font-bold'>Browser Extension</h1>
                              </div>
                              <p className='text-lg text-slate-300 lg:pr-28'>
                                   Quick access to all your crypto assets from your favorite browser!
                              </p>
                         </div>
                         <div className=' flex space-x-2 lg:space-x-5  items-center justify-center w-full '>
                              <p className='border rounded-xl border-slate-600 max-h-16 flex justify-center px-7 lg:px-12 py-4 '>
                                   <img src={chrome} alt='' />
                              </p>
                              <p className='border rounded-xl border-slate-600 max-h-16 flex justify-center px-7 lg:px-12 py-4 max-w-56'>
                                   <img src={edge} alt='' />
                              </p>
                              <p className='border rounded-xl border-slate-600 max-h-16 flex justify-center px-7 lg:px-12 py-4 max-w-56'>
                                   <img src={brave} alt='' />
                              </p>
                         </div>
                    </aside>
               </article>
          </section>
     );
};
