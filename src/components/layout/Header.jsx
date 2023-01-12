import React from 'react';
// *router
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav className=''>
        <ul>
          <li className=''>
            <Link to='/aboutMe'>About Me</Link>
          </li>
          <li>
            <Link to='/'>My Work</Link>
          </li>
          <li>
            <Link to='/'>Socials</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
