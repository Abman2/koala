import { Link, NavLink } from "react-router-dom";


export const HamburgerMenu = ({setIsMenuOpen}) => {

  return (
    <ul
      className=' md:hidden z-10 fixed top-[90px] pt-5 left-0 mx-auto h-full w-full border-t-2 flex flex-col font-semibold text-[17px] space-y-7  text-center'
      style={{ backgroundColor: 'rgb(23, 24, 38)' }}>
      <li>
        <NavLink to='security' className='hover:text-pink-600' onClick={() => setIsMenuOpen(false)} >
          Security
        </NavLink>
      </li>
      <li>
        <a href='/' className='hover:text-pink-600'onClick={() => setIsMenuOpen(false)}>
          Support
        </a>
      </li>
      <li>
        <NavLink to="news" className='hover:text-pink-600' onClick={() => setIsMenuOpen(false)}>
          News
        </NavLink>
      </li>
      <li>
        <a href='/' className='hover:text-pink-600'>
          Swag
        </a>
      </li>
      <NavLink to='downloadApp' className='mx-auto' onClick={() => setIsMenuOpen(false)}>
        <button className='bg bg-pink-600 flex h-12 w-[182px]  items-center justify-center rounded-full  '>Download App</button>
      </NavLink>
    </ul>
  );
};
