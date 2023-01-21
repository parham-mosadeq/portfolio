import React from 'react';
import { Link } from 'react-router-dom';
import { atom, useAtom } from 'jotai';
const openMenu = atom(false);
const Header = () => {
  const [isOpen, setIsOpen] = useAtom(openMenu);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className='relative flex md:items-center md:h-4  md:py-7  md:justify-around  justify-between capitalize dark:bg-slate-800 dark:border-b-2 dark:border-stone-500 bg-neutral-200 z-50 '>
      {/* logo */}
      <div className='ml-2 my-3'>
        <h1 className='font-bold tracking-widest font-lobster text-blue-600 hover:text-blue-700'>
          <Link to='/'>parham mosadeqzadeh</Link>
        </h1>
      </div>
      {/* logo */}
      {/* burger */}
      <div onClick={handleToggleMenu} className='md:hidden mr-2 z-10 mt-3  '>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth='1.5'
          stroke='currentColor'
          className='w-6 h-6 cursor-pointer dark:text-blue-500 text-gray-600 '
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
          />
        </svg>
      </div>
      {/* burger */}

      {/* lists */}
      <div
        className={`h-screen w-6/12 bg-gray-200   md:bg-transparent  transition-shadow  md:block md:h-fit md:relative   absolute right-0 top-0  ${
          isOpen ? 'visible' : 'hidden'
        }`}
      >
        <ul className='flex flex-col   md:m-0 md:flex-row md:justify-around items-center justify-center mt-10 md:items-center md:border-0  border-t-2 border-black p-3'>
          <li className='my-3 md:mx-4 dark:text-blue-500 '>
            <Link
              className='hover:cursor-pointer hover:text-gray-500 dark:hover:text-blue-700  text-md md:text-lg '
              to='/aboutMe'
            >
              About me
            </Link>
          </li>
          <li className='my-3 dark:text-blue-500 md:mx-4 '>
            <Link
              to='work'
              className='dark:hover:text-blue-700   hover:cursor-pointer hover:text-gray-500 text-md md:text-lg'
            >
              work
            </Link>
          </li>
          <li className='my-3 dark:text-blue-500 md:mx-4'>
            <Link
              to='/contactMe'
              className='dark:hover:text-blue-600   hover:cursor-pointer hover:text-gray-500 text-md md:text-lg'
            >
              contact me
            </Link>
          </li>
        </ul>
      </div>
      {/* lists */}
    </div>
  );
};

export default Header;
