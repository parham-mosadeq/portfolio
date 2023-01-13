import React from 'react';

const Footer = () => {
  return (
    <div className='flex justify-center h-full my-0 align-center py-2 capitalize shadow-lg dark:bg-black bg-neutral-200 '>
      <h4 className='font-bold tracking-widest font-montserrat-400 text-stone-700 dark:text-blue-400'>
        <span className='font-light text-blue-500  dark:text-white'>
          parham mosadeqzadeh{' '}
          <span className='text-blue-700 mx-2 my-0 dark:text-white'>|</span>
          <span className='dark:text-blue-500 text-stone-600'>
            Front-end developer
          </span>
        </span>
      </h4>
    </div>
  );
};

export default Footer;
