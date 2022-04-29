import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { RiMenu4Fill } from 'react-icons/ri';
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
          <a
            href='#home'
            className='block py-5 text-xl font-semibold text-dark dark:text-white sm:text-2xl lg:py-6 lg:text-3xl'
          >
            Portfo<span className='text-primary'>lio.</span>
          </a>

          <div className='flex'>
            <nav
              className={[
                'lg:static lg:block lg:max-w-full lg:rounded-none lg:bg-transparent lg:shadow-none',
                click ? 'nav-menu' : 'hidden',
              ].join(' ')}
            >
              {/* Desktop View */}
              <ul className='mr-5 hidden py-2  lg:flex lg:space-x-7 xl:space-x-10'>
                <li className='nav-item'>
                  <a href='#home' className='nav-link'>
                    Home
                  </a>
                </li>
                <li className='nav-item'>
                  <a href='#about' className='nav-link'>
                    About Me
                  </a>
                </li>
                <li className='nav-item'>
                  <a href='#experience' className='nav-link'>
                    Skills
                  </a>
                </li>
                <li className='nav-item'>
                  <a href='#portfolio' className='nav-link'>
                    Portfolio
                  </a>
                </li>
                <li className='nav-item'>
                  <a href='#blog' className='nav-link'>
                    Blog
                  </a>
                </li>
                <li className='nav-item'>
                  <a href='#contact' className='nav-link'>
                    Contact
                  </a>
                </li>
              </ul>

              {/* Mobile view */}
              <ul className='ml-5 block space-y-5 lg:hidden'>
                <li className='nav-item' onClick={handleClick}>
                  <a href='#home' className='nav-link'>
                    Home
                  </a>
                </li>
                <li className='nav-item' onClick={handleClick}>
                  <a href='#about' className='nav-link'>
                    About Me
                  </a>
                </li>
                <li className='nav-item' onClick={handleClick}>
                  <a href='#experience' className='nav-link'>
                    Skills
                  </a>
                </li>
                <li className='nav-item' onClick={handleClick}>
                  <a href='#portfolio' className='nav-link'>
                    Portfolio
                  </a>
                </li>
                <li className='nav-item' onClick={handleClick}>
                  <a href='#blog' className='nav-link'>
                    Blog
                  </a>
                </li>
                <li className='nav-item' onClick={handleClick}>
                  <a href='#contact' className='nav-link'>
                    Contact
                  </a>
                </li>
              </ul>
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
