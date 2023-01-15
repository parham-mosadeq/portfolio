import React from 'react';
import { Link } from 'react-router-dom';
const WorkItems = ({ name, techs, link, duration, description, pictures }) => {
  return (
    <div className='border-2 my-10  min-h-48 min-w-screen '>
      <div>
        <div className='flex justify-between relative '>
          <div className='mt-2'>
            <div className='flex flex-row   items-center justify-center m-0'>
              <Link
                to={link}
                className=' text-blue-500 py-0 font-bold font-montserrat capitalize  '
              >
                {name}
              </Link>
              {/* duration start */}
              <div className='ml-2 rounded-sm my-0  self-center '>
                <p className='text-sky-600 capitalize font-montserrat font-light'>
                  {' '}
                  {duration}
                </p>
              </div>
              {/* duration end */}
            </div>
            <p className='text-stone-500 break-words max-w-sm mx-4 my-4 first-letter:capitalize dark:text-white'>
              {description}
            </p>
          </div>
          {/* img start */}
          <div className='w-full min-h-full flex  m-0 p-0'>
            <img
              src={pictures}
              alt=''
              className='block w-full h-full object-cover '
            />
          </div>
          {/* img end */}
        </div>

        <br />
        <div className='border-t-2 w-8/12 my-1 py-1 mx-auto'>
          {/* techs start */}
          <div className='flex items-center  '>
            <p className='m-2'>
              {techs.map((tech, idx) => {
                return (
                  <span
                    className='border-2 border-blue-200 text-stone-500 dark:text-orange-400 tracking-wider px-2 rounded-md my-2 mx-1 min-w-full'
                    key={idx}
                  >
                    {tech}{' '}
                  </span>
                );
              })}
            </p>
          </div>
          {/* techs end */}
        </div>
      </div>
    </div>
  );
};

export default WorkItems;
