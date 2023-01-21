import React, { useEffect } from 'react';
import { useAtom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';
const darkModeAtom = atomWithStorage('theme', 'light');
const DarkTheme = () => {
  const [darkMode, setDarkMode] = useAtom(darkModeAtom);

  const toggleTheme = () => {
    if (darkMode === 'light') {
      setDarkMode('dark');
      document.body.classList.add('dark');
    } else {
      setDarkMode('light');
      document.body.classList.remove('dark');
    }
  };

  useEffect(() => {
    localStorage.setItem('theme', darkMode);
  }, [darkMode]);

  return (
    <div className='absolute right-10 top-20 z-10'>
      <button
        className={`${darkMode ? ' ' : ' text-black'}`}
        onClick={() => toggleTheme()}
      >
        {darkMode ? (
          <span className='  text-4xl '> 🌑</span>
        ) : (
          <span className='text-yellow-500 text-4xl '>☀</span>
        )}
      </button>
    </div>
  );
};

export default DarkTheme;
