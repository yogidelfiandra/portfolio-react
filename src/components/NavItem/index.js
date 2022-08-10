import React from 'react';
import Menu from './Menu';

export default function NavItem({ isMobile }) {
  return (
    <>
      {!isMobile && (
        <ul className='mr-5 hidden py-2  lg:flex lg:space-x-7 xl:space-x-10'>
          <Menu href='#home' title='Home' />
          <Menu href='#about' title='About Me' />
          <Menu href='#experience' title='Skills' />
          <Menu href='#portfolio' title='Portfolio' />
          <Menu href='#blog' title='Blog' />
          <Menu href='#contact' title='Contact' />
        </ul>
      )}

      {isMobile && (
        <ul className='ml-5 block space-y-5 lg:hidden'>
          <Menu href='#home' title='Home' />
          <Menu href='#about' title='About Me' />
          <Menu href='#experience' title='Skills' />
          <Menu href='#portfolio' title='Portfolio' />
          <Menu href='#blog' title='Blog' />
          <Menu href='#contact' title='Contact' />
        </ul>
      )}
    </>
  );
}
