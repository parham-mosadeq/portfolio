import React from 'react';
import Title from '../layout/Title';
import { TypeAnimation } from 'react-type-animation';
import DarkTheme from '../darkTheme/DarkTheme';
import { useEffect } from 'react';
const AboutMe = () => {
  useEffect(() => {
    document.title = 'Parham Mosadeqzadeh | About me';
  }, []);

  return (
    <main className='w-full mx-auto h-screen dark:bg-black my-0 '>
      <DarkTheme />
      <div
        className='max-w-sm
  md:max-w-lg
  lg:max-w-xl
   mx-auto p-0 -mt-5'
      >
        <div className='py-10 mx-auto'>
          <Title>who am i?</Title>
        </div>
        <div className='block text-center'>
          <p className='font-montserrat font-medium text-justify text-sm md:text-lg text-stone-500 dark:text-white'>
            Hi, i'm
          </p>
          <div className='font-montserrat font-light  text-sm text-blue-500 text-justify'>
            <TypeAnimation
              sequence={[
                'Parham mosadeqzadeh', // Types 'One'
                300,
                '',
                300, // Waits 1s
                // Types 'Three' without deleting 'Two'
              ]}
              wrapper='div'
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: '2em' }}
            />
          </div>
          <p className='text-stone-500 dark:text-white'>
            a freshly started front-end developer looking for new experiences
          </p>
          <br />
          <p className='text-stone-500 dark:text-white'>
            i started programming at the age of 19 and ever since i loved it 😃
            <br />
            here is my github link to see and check my other project that i did{' '}
            <a
              href='https://github.com/parham-mosadeq'
              target='_blank'
              rel='noreferrer'
              className='text-black dark:text-blue-700'
            >
              github
            </a>
          </p>
        </div>
      </div>
    </main>
  );
};

export default AboutMe;
