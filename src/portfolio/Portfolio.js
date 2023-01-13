import React from 'react';
import Title from '../components/layout/Title';
import profileInfo from '../data/profileInfon.json';
import PortfolioItem from './PortfolioItem';
const Portfolio = () => {
  return (
    <main className='h-screen'>
      <Title>projects</Title>

      {profileInfo.map((projects) => {
        const { id, name, techs, link, duration, description } = projects;
        return (
          <div key={id}>
            <PortfolioItem
              name={name}
              techs={techs}
              link={link}
              duration={duration}
              description={description}
            />
          </div>
        );
      })}
    </main>
  );
};

export default Portfolio;
