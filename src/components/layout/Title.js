import React from 'react';

const Title = ({ children }) => {
  return (
    <h2
      className='
  capitalize
  text-left
  border-b-4
  text-blue-700
  dark:text-white
  font-montserrat
  border-black
  block
  my-4
  w-3/12
  
  '
    >
      {children}
    </h2>
  );
};

export default Title;
