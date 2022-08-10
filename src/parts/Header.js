import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { RiMenu4Fill } from 'react-icons/ri';
import NavBrand from '../components/NavBrand';
import NavItem from '../components/NavItem';
import Toogle from '../components/Toggle';

export default function Header() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  window.onscroll = function () {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if (window.pageYOffset > fixedNav) {
      header.classList.add('navbar-fixed');
    } else {
      header.classList.remove('navbar-fixed');
    }
  };

  return (
    <header>
      <div className='container'>
        <div className='relative flex items-center justify-between sm:px-4'>
          <NavBrand />

          <div className='flex'>
            <nav
              className={[
                'lg:static lg:block lg:max-w-full lg:rounded-none lg:bg-transparent lg:shadow-none',
                click ? 'nav-menu' : 'hidden',
              ].join(' ')}
            >
              <NavItem />
              <NavItem isMobile />
            </nav>

            <div className='flex'>
              <Toogle />
              <div
                className='cursor-pointer rounded-md bg-primary p-1.5 lg:hidden'
                onClick={handleClick}
              >
                {click ? (
                  <FaTimes size={20} style={{ color: 'white' }} />
                ) : (
                  <RiMenu4Fill size={20} style={{ color: 'white' }} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
