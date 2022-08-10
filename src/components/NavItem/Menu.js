import React, { useState } from 'react';

export default function Menu({ isMobile, href, title }) {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      {!isMobile && (
        <li className='nav-item'>
          <a href={href} className='nav-link'>
            {title}
          </a>
        </li>
      )}

      {isMobile && (
        <li className='nav-item' onClick={handleClick}>
          <a href={href} className='nav-link'>
            {title}
          </a>
        </li>
      )}
    </>
  );
}
