import React, { useEffect } from 'react';
import DarkTheme from '../darkTheme/DarkTheme';
const Contact = () => {
  useEffect(() => {
    document.title = 'Parham Mosadeqzadeh | Contact me';
  }, []);

  return (
    <main className='flex bg-neutral-50 flex-col h-screen w-full items-center justify-start dark:bg-slate-800'>
      <DarkTheme />
      <form
        action='https://getform.io/f/234817f3-23e2-4906-8a90-7cb027ff1da0'
        method='POST'
        className='flex flex-col my-5 p-5'
      >
        <input
          type='text'
          name='name'
          placeholder='Enter your name...'
          className='active:outline-none focus:outline-none
           border-2 border-stone-300 p-1 my-2 
           dark:bg-stone-50 
           dark:border-red-500
           '
        />
        <input
          type='email'
          name='email'
          className='active:outline-none focus:outline-none
          border-2 border-stone-300 p-1
          dark:bg-stone-50 
          dark:border-blue-500
          '
          important='true'
          placeholder='Enter your email...'
        />
        <textarea
          cols='30'
          rows='20'
          maxLength={100}
          minLength={10}
          className='border-2
          dark:border-green-200
          dark:bg-stone-50 
          h-20 my-10 focus:outline-none active:outline-none'
          placeholder=' :)'
          name='message'
        ></textarea>

        <button
          type='submit'
          className='
      capitalize
      tracking-wider 
      font-montserrat font-light text-white
      focus:outline-none active:outline-none p-1 my-5 rounded-md bg-gradient-to-r from-blue-600 to-red-600  
      dark:bg-gradient-to-r dark:to-red-600 dark:from-blue-600
      hover:transition-all
      animate-bounce
      '
        >
          Send
        </button>
      </form>
      <article>
        <h3 className='dark:text-stone-100 text-left hover:cursor-pointer'>
        </h3>
      </article>
    </main>
  );
};

export default Contact;
