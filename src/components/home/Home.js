import React from 'react';
// * profile img
import Title from '../layout/Title';
import Portfolio from '../portfolio/Portfolio';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import DarkTheme from '../darkTheme/DarkTheme';
import ScrollToTop from '../shared/ScrollToTop';
const Home = () => {
  useEffect(() => {
    document.title = 'Parham Mosadeqzadeh | Home';
  }, []);

  return (
    <main className='dark:bg-slate-800 mx-auto w-full min-h-screen overflow-x-hidden my-0 bg-neutral-100 '>
      <div
        className='my-10 
        max-w-xs
        mx-auto
        md:max-w-lg
        lg:max-w-xl
        flex flex-col  max-w-sx '
      >
        <article className=''>
          <DarkTheme />
          {/* who am i */}
          <div className='w-60 h-60 block'>
            <img
              src={'profile'}
              alt='will be uploaded'
              className='rounded-full shadow-sm shadow-blue-300 text-center  w-full object-cover mx-auto mb-10'
            />
          </div>
        </article>
        <article className=''>
          <div className='my-10'>
            {/* <AboutMe /> */}
            <Title>who am i?</Title>
            <p className='dark:text-white font-montserrat font-medium text-justify text-sm md:text-lg'>
              Hi👋,
              <br /> i'm Parham mosadeqzadeh a freshly started front-end
              developer looking for new experiences
              <Link className='text-blue-500 block ' to='/aboutMe'>
                read more ...
              </Link>
            </p>
          </div>
          {/* work section */}
          <div className='dark:text-white m-0 '>
            <Title>projects</Title>
            <div className='my-14'>
              <Portfolio />
            </div>
          </div>
        </article>
      </div>
      <ScrollToTop />
    </main>
  );
};

export default Home;
