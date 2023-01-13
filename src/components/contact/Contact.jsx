import React from 'react';

const Contact = () => {
  return (
    <div className='flex flex-col h-screen w-full items-center justify-start'>
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
          '
        />
        <input
          type='email'
          name='email'
          className='active:outline-none focus:outline-none
          border-2 border-stone-300 p-1
          '
          important='true'
          placeholder='Enter your email...'
        />
        <textarea
          cols='30'
          rows='20'
          maxLength={100}
          minLength={10}
          className='border-2 h-20 my-10 focus:outline-none active:outline-none'
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
      '
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
