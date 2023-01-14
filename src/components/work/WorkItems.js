import React from 'react';
import { Link } from 'react-router-dom';
const WorkItems = ({ name, techs, link, duration, description, pictures }) => {
  return (
    <div className='border-2 my-10  min-h-48 min-w-full '>
      <div>
        <div className='flex justify-between relative '>
          <div className='mt-2'>
            <div className='flex flex-row  items-center justify-evenly m-0'>
              <Link
                to={link}
                className='text-blue-500 py-0 font-bold font-montserrat capitalize  '
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
          <div className='w-full min-h-full m-0 p-0'>
            <img
              src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXwBFRcXHhoeOyEhO3xTRlN8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fP/AABEIAIIAggMBIgACEQEDEQH/xAAaAAEAAgMBAAAAAAAAAAAAAAAAAQQDBQYC/8QANxAAAgEDAQILBQgDAAAAAAAAAAECAwQRBRIhBhMUIjFBUWGhscE0NXKB4SMyYnFzkdHwQlOi/8QAFwEBAQEBAAAAAAAAAAAAAAAAAAECA//EACERAQEBAAICAQUBAAAAAAAAAAABEQIhMTIzEkFCQ1ED/9oADAMBAAIRAxEAPwDswAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABBIAEZwMrGc7gJBDaWMvpJAAgkACABIIAEgAAAAAAA0fCRujRpTpTnCUp73GTWdxc0eOdPo1JOUpyjvbk3neUuFPstD9T0L+je6rf4fU6344xPZbqVI047U3hZS/fcYKFTZrVLafTHnRz1xf8dBW1+TjpVTDw9qPmVql1Krp9tqVNZqUHiou1dEl6mZx2a1q9Slxir2U5NVKf3X17L+6/l6Huwu+VUXtpKtTexUj2SRS1KrxXJtTt3tRjunj/ACgyveV+Q6lSvqPOt7mK28df1LOOprYape8l5PCL59WrFfLO8vnL8IZuOqUp5eFTjJd29nTSmo03N9CWWTlxyQla7U9UdvVjbW0OMuZ7kuqJmoWU3FSvK9SrUe94k4xXckjTaCnd6pWuqm+STl82dMOc+nonfarU0+nNcypWpS6pRqS3fLODHpnKoyr0bupxjpyWzLGMpovkGd+y4kAEUAAAAAaLhT7LQ/U9C/o3uq3+H1KHCn2Wh+p6F/RvdVv8Pqdb8cYnsq8JZY06K7aiXgz1oVGM9GUJrMajlld2cGHhRLFrRj21M+H1LujR2dKt12xz4j9a/k1umP2nSLl9qh/fE8aPDj3PT7qLfJ6nGRfY096/veeuENGdvdUb2jzZZw33ro8PI29jCnKHKowcJ3CjKSf5Ft63+pJ20nCmH29CXbBrx+pu5t1dMbj0yo5/5NXwpj9lby/E0bTTJbem27e/7NIl9ITzWl4LSXG3EetxTR0hy+xLRNXU5J8nm2k/wv8Ag6eMlKKlFpp7011k/wBO7q8fGInDbjhuS74vDOd0m6ubrUZUa1xVcFGTS2sdDOkOW0D3xP4ZeaHD1py8x1K6CQDm0AAAAANdqWnS1GMYyrKEIyysQy/Mz2VtO0oRouopwgsLm4fmWiC7cxMa7UtMnqOyp11CMG2kob/MtWdCdtQhRlNTjBKMWo49TOSNuYYwXlrTvKDo1futp/szMlhYW5IkEVr9S0+WowjCVZQhGW0sQy+j8+8zWNtO0oRouqqkIrC5uH5loF25iYx1qFOvTdOtBTg+plWjp8rXda3E4Q/1zSlFfl1+JeA2qrTo3E007lQT64U8PxbMdlpdrYy2qMHt4xtSeWXQNqYAAigAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//Z'
              alt=''
              className='block w-full h-full object-cover'
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
