import React from 'react';

export default function NavBrand() {
  return (
    <a
      href='#home'
      className='block py-5 text-xl font-semibold text-dark dark:text-white sm:text-2xl lg:py-6 lg:text-3xl'
    >
      Portfo<span className='text-primary'>lio.</span>
    </a>
  );
}
