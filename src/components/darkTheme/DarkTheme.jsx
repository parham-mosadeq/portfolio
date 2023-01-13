import React from 'react';
import { useAtom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';
const darkModeAtom = atomWithStorage('theme', false);
const DarkTheme = () => {
  const [darkMode, setDarkMode] = useAtom(darkModeAtom);
  const toggleTheme = () => {
    console.log(darkMode === 'dark');
    if (darkMode) {
      setDarkMode(false);
      document.body.classList.add('dark');
    } else {
      setDarkMode(true);
      document.body.classList.remove('dark');
    }
  };
  return (
    <div className='absolute right-10 top-20 z-10'>
      <button
        className={`${darkMode ? ' ' : ' text-black'}`}
        onClick={() => toggleTheme()}
      >
        {darkMode ? (
          <span className='text-yellow-500 text-4xl '>☀</span>
        ) : (
          <span className='  text-4xl '> 🌑</span>
        )}
      </button>
    </div>
  );
};

export default DarkTheme;
