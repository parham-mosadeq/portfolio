import React from 'react';
// *router
import { Link } from 'react-router-dom';
// *jotai
import { atom, useAtom } from 'jotai';
const openMenu = atom(false);
const Header = () => {
  const [openM, setOpenM] = useAtom(openMenu);
  const handleToggleMenu = () => {
    setOpenM(!openM);
  };
  return (
    <>
      <div
        onClick={() => handleToggleMenu()}
        className={`md:hidden  flex font-bold h-9 flex-col m-0 p-0 hover:cursor-pointer mb-9 bg-orange-400 first-letter:
        ${!openM ? 'absolute' : 'relative '} 
        `}
      >
        <div className='border-b-1 w-5 h-1 m-0 p-0 text-black z-10'>--</div>
        <div className='border-b-1 w-5 h-1 m-0 p-0 text-black z-10'>--</div>
        <div className='border-b-1 w-5 h-1 m-0 p-0 text-black z-10'>--</div>
      </div>
      <header
        className={`md:flex items-center md:justify-between w-6/12 h-screen md:w-full md:max-h-8  bg-orange-400 mb-7
          ${openM ? 'hidden' : 'visible'} 
    `}
      >
        <div
          className={`text-blue-500  text-lg border-b-2 w-full md:border-b-0  p-2 md:w-2/12 `}
        >
          {/* add an icon here for your name */}
          <h1 className='  text-center  '>
            <Link className='hover:cursor-pointer' to='/'>
              Pm
            </Link>
          </h1>
        </div>
        <nav className={`max-w-xl max-h-fit mt-5 md:mt-0 `}>
          <ul className='flex flex-col md:flex-row items-center  p-2 ml-2 mr-2 '>
            <li className='mr-2 ml-2 mb-9 mt-7 md:mt-0 md:mb-0  hover:cursor-pointer  hover:text-white  '>
              <Link className='font-medium tracking-wide' to='/aboutMe'>
                About Me
              </Link>
            </li>
            <li className='mr-2 ml-2 mb-9 mt-7 md:mt-0 md:mb-0  hover:cursor-pointer  hover:text-white'>
              <Link className='font-medium tracking-wide' to='/'>
                My Work
              </Link>
            </li>
            <li className='mr-2 ml-2 mb-9 mt-7 md:mt-0 md:mb-0  hover:cursor-pointe hover:text-white'>
              <Link className='font-medium tracking-wide' to='/'>
                Socials
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
