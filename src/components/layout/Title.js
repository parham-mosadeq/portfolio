import React from 'react';

const Title = ({ children }) => {
  return (
    <h2
      className='
  capitalize
  text-left
  text-blue-700
  dark:text-blue-300
  font-montserrat
  font-bold 
  border-black
  border-b-4
  block
  my-4
  w-3/12
  dark:border-white
  max-w-sm
  md:max-w-lg
  lg:max-w-xl
  
  '
    >
      {children}
    </h2>
  );
};

export default Title;
