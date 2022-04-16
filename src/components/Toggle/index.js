import React, { useState } from 'react';
import { BiMoon, BiSun } from 'react-icons/bi';
import useDarkMode from '../../helpers/hooks/useDarkMode';

export default function Toogle() {
  const [isClick, setClick] = useState(false);
  const [setTheme, colorTheme] = useDarkMode();

  const handleClick = () => setClick(!isClick);

  return (
    <div className='mr-5 cursor-pointer px-2 py-2' onClick={handleClick}>
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
