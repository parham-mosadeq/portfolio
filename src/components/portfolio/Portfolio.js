import React from 'react';
import profileInfo from '../../data/profileInfo.json';
import PortfolioItem from './PortfolioItem';
const Portfolio = () => {
  return (
    <main
      className='
      w-96  
      grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3
      2xl:grid-cols-3 2xl:min-w-full
      gap-2
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
