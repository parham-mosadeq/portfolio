import React from 'react';
import profileInfo from '../../data/profileInfo.json';
import PortfolioItem from './PortfolioItem';
const Portfolio = () => {
  return (
    <main
      className='
      min-w-full 
      grid grid-cols-1 
      2xl:min-w-full
      gap-y-6
      max-w-xs
      md:max-w-lg
      lg:max-w-xl

      '
    >
      {profileInfo.map((projects) => {
        const { id, name, techs, link, duration, description, pictures } =
          projects;
        return (
          <div
            key={id}
            className='
            w-80
            border-2 border-stone-300 mx-auto p-2   '
          >
            <PortfolioItem
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
    </main>
  );
};

export default Portfolio;
