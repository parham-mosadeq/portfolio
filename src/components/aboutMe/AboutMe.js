import React from 'react';
import Title from '../layout/Title';
const AboutMe = () => {
  return (
    <>
      <div>
        <Title>who am i?</Title>
      </div>
      <div className='block'>
        <p className='font-montserrat font-medium text-justify text-sm md:text-lg'>
          Hi, i'm Parham mosadeqzadeh a freshly started front-end developer
          looking for new experiences
        </p>
      </div>
    </>
  );
};

export default AboutMe;
