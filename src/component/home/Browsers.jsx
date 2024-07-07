import React from 'react';
import ios from '../../assets/ios.svg';
import brave from '../../assets/brave.png';
import android from '../../assets/android.svg';
import chrome from '../../assets/chrome.png';
import bing from '../../assets/bing.png';

export const Browsers = () => {
     return (
          <div className='border  border-slate-700 p-3 py-4 bg-[#333654] bg-opacity-[0.36] rounded-3xl w-[420px] max-w-sm md:max-w-full'>
               <div className='flex justify-evenly p-3'>
                    <button className='border border-slate-700 iconBox p-3  rounded-xl w-16 h-16 flex items-center justify-center'>
                         <img src={ios} alt='' className='' />
                    </button>
                    <button className='border p-3 iconBox border-slate-700 w-16 h-16 rounded-xl flex items-center justify-center'>
                         <img src={android} alt='' className='' />
                    </button>
                    <button className='border p-3 iconBox border-slate-700 h-16 w-16 rounded-xl'>
                         <img src={chrome} alt='' className='' />
                    </button>
                    <button className='border p-3 border-slate-700 iconBox h-16 w-16 flex items-center justify-center rounded-xl'>
                         <img src={brave} alt='' className=' h-10  ' />
                    </button>
                    <button className='border p-3 iconBox border-slate-700 rounded-xl h-16 w-16 flex items-center justify-center'>
                         <img src={bing} alt='' className=' ' />
                    </button>
               </div>
               <p className='text-center font-semibold text-slate-400'>Available for Mobile and Web</p>
          </div>
     );
};
