import React, { useEffect } from 'react';
import Title from '../layout/Title';
import { TypeAnimation } from 'react-type-animation';
import DarkTheme from '../darkTheme/DarkTheme';
import expertise from '../../data/expertise.json';
const AboutMe = () => {
  useEffect(() => {
    document.title = 'Parham Mosadeqzadeh | About me';
  }, []);

  return (
    <main className='w-full mx-auto min-h-screen dark:bg-black my-0 font-montserrat'>
      <DarkTheme />
      <div
        className='max-w-sm
  md:max-w-lg
  lg:max-w-xl
   mx-auto p-0 -mt-5'
      >
        <div className='py-10 mx-auto h-full'>
          <Title>who am i?</Title>
        </div>
        <div className='block text-center'>
          <p className='first-letter:capitalize  font-medium text-justify text-sm md:text-lg text-stone-500 dark:text-white'>
            hi, i'm
          </p>
          <div className=' font-light  text-sm text-blue-500 '>
            <TypeAnimation
              sequence={[
                'Parham mosadeqzadeh', // Types 'One'
                400,
                '',
                400, // Waits 1s
                // Types 'Three' without deleting 'Two'
              ]}
              wrapper='div'
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: '2em' }}
            />
          </div>
          <p className='text-stone-600 dark:text-white text-left first-letter:capitalize py-1'>
            a freshly started front-end developer looking for new experiences. i
            started programming at the age of 19 and ever since i loved it 😃
            here is my github link to see and check my other project that i did{' '}
            <a
              href='https://github.com/parham-mosadeq'
              target='_blank'
              rel='noreferrer'
              className='text-black dark:text-blue-700'
            >
              github
            </a>
            .
            <br />i love coding especially front-end related topics{' '}
            <span className='text-stone-500'>(react,next,js...)</span> i'm a
            passionate learner👩‍💻 and also a book worm📚. <br /> sometimes an
            extroverted sometimes introverted... but any how a friendly guy :).
          </p>
        </div>
        {/* needs start */}
        <div className='my-10 dark:text-stone-50 text-stone-500'>
          <Title>looking for...</Title>
          <div className='my-5'>
            <p className='my-5'>
              Seeking to gain new experiences in the field of front-end
              development through employment with a state-of-the-art technology
              firm.
            </p>
          </div>
        </div>
        {/* needs end */}
        {/* expertise start */}

        <div className='mt-10 dark:text-stone-50 '>
          <Title>expertise</Title>
          <div>
            <p className='text-stone-500 font-medium dark:text-stone-50'>
              i'm expert in these techs
            </p>
            <ul className=' '>
              {expertise.map((exp) => {
                return (
                  <li
                    key={exp.id}
                    className='capitalize tracking-wider font-normal'
                  >
                    <p>{exp.exp}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <br />
        {/* expertise end */}
      </div>
    </main>
  );
};

export default AboutMe;
