import React, { useEffect } from 'react';
import profileInfo from '../../data/profileInfo.json';
import DarkTheme from '../darkTheme/DarkTheme';
import WorkItems from './WorkItems';
const Works = () => {
  useEffect(() => {
    document.title = 'Parham Mosadeqzadeh | Works';
  }, []);
  return (
    <main className='min-h-screen  bg-neutral-50 flex flex-col items-center justify-between dark:bg-black'>
      <DarkTheme />
      <article className='pt-5 md:max-w-lg max-w-sm mx-auto '>
        <div>
          <h3
            className='text-center capitalize tracking-widest text-blue-600 font-lobster 
          font-lighter dark:text-blue-400'
          >
            here is my full discovery:
          </h3>
        </div>
      </article>
      <article className='mb-48 w-6/12 h-full '>
        <div className='grid grid-cols-1 md:grid-cols-1     gap-2'>
          {profileInfo.map((project) => {
            const { id, name, techs, link, duration, description, pictures } =
              project;

            return (
              <div className='w-96 mx-auto block  ' key={id}>
                <WorkItems
                  name={name}
                  techs={techs}
                  link={link}
                  duration={duration}
                  description={description}
                  pictures={pictures}
                />
              </div>
            );
          })}
        </div>
      </article>
    </main>
  );
};

export default Works;
