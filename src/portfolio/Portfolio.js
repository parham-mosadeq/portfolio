import React from 'react';
import Title from '../components/layout/Title';
import profileInfo from '../data/profileInfon.json';
import PortfolioItem from './PortfolioItem';
const Portfolio = () => {
  return (
    <main className='  w-96 mx-auto grid grid-cols-1 md:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-2 2xl:min-w-max'>
      {profileInfo.map((projects) => {
        const { id, name, techs, link, duration, description, pictures } =
          projects;
        return (
          <div key={id} className='border m-4 p-2   '>
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
