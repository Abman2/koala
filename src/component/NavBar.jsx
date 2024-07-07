import koala from '../assets/koala.svg';
import hamburger from '../assets/hamburger.svg';
import { useState } from 'react';
import {HamburgerMenu} from "./HamburgerMenu"
import { Link, NavLink } from 'react-router-dom';

export const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  
  return (
  <div className="h-20">
      <nav
      className=' fixed z-50 flex w-full flex-row items-center  justify-between gap-4 px-5 pb-6 pt-8 xl:pl-[120px] xl:pr-[120px] text-white bg-slate-900'>
      <div>
        <NavLink to="/" className='h-5 md:h-8'>
          <img src={koala} alt='loala logo' className='h-6 md:h-[inherit]'/>
        </NavLink>
      </div>
      {!showMenu && (
        <ul className='relative z-10 hidden flex-row items-center text-white md:flex md:gap-4 xl:gap-10 font-semibold text-[15px] leading-4'>
          <li>
            <NavLink to="security" className='hover:text-pink'>
              Security
            </NavLink>
          </li>
          <li>
            <a href='/' className='hover:text-pink'>
              Support
            </a>
          </li>
          <li>
            <NavLink to="news" className='hover:text-pink'>
              News
            </NavLink>
          </li>
          <li>
            <a href='/' className='hover:text-pink'>
              Swag
            </a>
          </li>
          <Link to='downloadApp'>
            <button className='bg bg-pink-600 flex h-12 w-[182px]  items-center justify-center rounded-full  '>Download App</button>
          </Link>
        </ul>
      )}
      <div className='md:hidden'>
        <img src={hamburger} alt='hamburger' className='h hover:bg-pink-700' onClick={toggleMenu} />
      </div>
      {showMenu && <HamburgerMenu />}
    </nav>
  </div>
  );
};
