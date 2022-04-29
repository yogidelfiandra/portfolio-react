import React, { useState } from 'react';
import { BiMoon, BiSun } from 'react-icons/bi';
import useDarkMode from '../../helpers/hooks/useDarkMode';

export default function Toogle() {
  const [isClick, setClick] = useState(false);
  const [setTheme, colorTheme] = useDarkMode();

  const handleClick = () => setClick(!isClick);

  return (
    <div
      className='mr-2.5 cursor-pointer p-1.5 lg:mr-0 lg:py-2 lg:px-0'
      onClick={handleClick}
    >
      {isClick ? (
        <BiSun
          size={20}
          className='dark:text-white'
          onClick={() => setTheme(colorTheme)}
        />
      ) : (
        <BiMoon size={20} onClick={() => setTheme(colorTheme)} />
      )}
    </div>
  );
}
