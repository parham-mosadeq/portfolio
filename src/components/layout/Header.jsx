import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div className='flex justify-center align-center my-5 capitalize  '>
      <h1 className='font-bold tracking-widest font-lobster text-blue-600'>
        <Link to='/'>parham mosadeqzadeh</Link>
      </h1>
    </div>
  );
};

export default Header;
