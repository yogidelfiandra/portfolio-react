import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { RiMenu4Fill } from 'react-icons/ri';

export default function Hamburger() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div
      className='cursor-pointer rounded-md bg-primary px-2 py-2 lg:hidden'
      onClick={handleClick}
    >
      {click ? (
        <FaTimes size={20} style={{ color: 'white' }} />
      ) : (
        <RiMenu4Fill size={20} style={{ color: 'white' }} />
      )}
    </div>
  );
}
