import React from 'react';
import { Speciality } from '../component/home/Speciality';
import { Header } from '../component/home/Header';
import { Explore } from '../component/home/Explore';
import { Footer } from '../component/Footer';

export const Home = () => {
     return (
          <div style={{ backgroundColor: 'rgb(23, 24, 38)' }}>
               <header className='  overflow-hidden w-full mx-auto relative'>
                    <Header />
               </header>
               <Speciality />
               <Explore />
          </div>
     );
};
