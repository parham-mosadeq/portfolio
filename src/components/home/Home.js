import React from 'react';
// * profile img
import profile from '../../assets/parham.jpg';
import Title from '../layout/Title';
import Portfolio from '../../portfolio/Portfolio';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    document.title = 'Parham mosadeqzadeh | home';
  }, []);

  return (
    <main className='w-full h-full overflow-x-hidden my-0 bg-gradient-to-l from-blue-100 to-red-100  '>
      <article className='my-10  flex flex-col md:max-w-lg max-w-sm mx-auto'>
        {/* who am i */}
        <div className='w-60 h-60 block'>
          <img
            src={profile}
            alt=''
            className='rounded-full h-full w-full object-cover mx-auto mb-10'
          />
        </div>
        <div className='my-10'>
          {/* <AboutMe /> */}
          <Title>who am i?</Title>
          <p className='font-montserrat font-medium text-justify text-sm md:text-lg'>
            Hi👋,
            <br /> i'm Parham mosadeqzadeh a freshly started front-end developer
            looking for new experiences
            <Link className='text-blue-500 block' to='/aboutMe'>
              ...read more
            </Link>
          </p>
        </div>
        {/* work section */}
        <div className=''>
          <Title>projects</Title>
          <Portfolio />
        </div>
      </article>
    </main>
  );
};

export default Home;
