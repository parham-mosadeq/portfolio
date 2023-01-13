import React from 'react';
// * profile img
import profileImg from '../../assets/parham.jpg';
import Title from '../layout/Title';
import AboutMe from '../aboutMe/AboutMe';
import Portfolio from '../../portfolio/Portfolio';
const Home = () => {
  return (
    <main className='w-full h-screen overflow-hidden flex flex-col items-center justify-center '>
      <article className='relative  flex items-center justify-center my-10'>
        <div
          className='w-60 h-60
       
        '
        >
          {/* <div
            className="
            before:content-[''] before:h-52
        before:w-52 before:bg-slate-50 
        before:absolute 
        before:left-80 before:top-50
        before:rounded-full 
        animate-ping
          "
          ></div>
          <div
            className="
          after:content-['']
          after:w-52 after:h-52 
          after:bg-blue-100 
          after:absolute 
          after:top-30 after:right-80
          after:rounded-full
          animate-pulse
          -z-10
          "
          ></div>
          <div
            className="
          after:content-['']
          after:w-48 after:h-48 
          after:bg-red-100 
          after:absolute 
          after:top-80 after:right-96
          after:rounded-full
          animate-pulse
          -z-10
          "
          ></div> */}
          <img
            className='object-cover my-0 z-50 w-full h-full rounded-full  '
            src={profileImg}
            alt='parham mosadeqzadeh'
          />
        </div>
      </article>

      <article className='my-10 flex flex-col max-w-lg h-screen '>
        {/* who am i */}
        <div className='mb-10'>
          <AboutMe />
        </div>
        {/* work section */}
        <Portfolio />
      </article>
    </main>
  );
};

export default Home;
