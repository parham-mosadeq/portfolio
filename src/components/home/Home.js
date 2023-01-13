import React from 'react';
// * profile img
import Title from '../layout/Title';
import Portfolio from '../../portfolio/Portfolio';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import DarkTheme from '../darkTheme/DarkTheme';

const Home = () => {
  const localTheme = localStorage.getItem('theme');
  console.log(localTheme);
  useEffect(() => {
    document.title = 'Parham Mosadeqzadeh | Home';
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
  }, []);

  return (
    <main className='dark:bg-black w-full h-full overflow-x-hidden my-0  bg-neutral-100 '>
      <article className='my-10  flex flex-col md:max-w-lg max-w-sm mx-auto'>
        <DarkTheme />
        {/* who am i */}
        <div className='w-60 h-60 block'>
          <img
            src={'profile'}
            alt='will be uploaded'
            className='rounded-full h-full w-full object-cover mx-auto mb-10'
          />
        </div>
        <div className='my-10'>
          {/* <AboutMe /> */}
          <Title>who am i?</Title>
          <p className='dark:text-white font-montserrat font-medium text-justify text-sm md:text-lg'>
            Hi👋,
            <br /> i'm Parham mosadeqzadeh a freshly started front-end developer
            looking for new experiences
            <Link className='text-blue-500 block ' to='/aboutMe'>
              read more ...
            </Link>
          </p>
        </div>
        {/* work section */}
        <div className='dark:text-white '>
          <Title>projects</Title>
          <Portfolio />
        </div>
      </article>
    </main>
  );
};

export default Home;
