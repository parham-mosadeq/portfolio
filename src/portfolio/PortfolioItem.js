import React from 'react';
const PortfolioItem = ({
  name,
  techs,
  link,
  duration,
  description,
  pictures,
}) => {
  return (
    <main className='    my-4'>
      <h4 className='font-montserrat  font-extrabold tracking-wider capitalize'>
        {name}
      </h4>
      <div className=' '>
        <img className='h-16   object-cover' src={pictures} alt={name} />
      </div>
      <div className=''>
        <p>
          {techs.map((tech, idx) => {
            return (
              <span
                key={idx}
                className='flex flex-wrap border font-montserrat text-sm md:text-md font-light  m-2 p-1   w-fit  border-blue-900'
              >
                {tech}
              </span>
            );
          })}
        </p>
        <p className='  mt-3'>
          <a
            className='text-blue-500 '
            rel='noreferrer'
            href={link}
            target='_blank'
          >
            check it out!
          </a>
        </p>
        <p className='text-stone-500 my-2 dark:text-white'>{description}</p>
        <span className='text-stone-400 dark:text-stone-600'>{duration}</span>
      </div>
    </main>
  );
};

export default PortfolioItem;
