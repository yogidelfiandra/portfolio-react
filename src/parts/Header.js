import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { RiMenu4Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

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
    <header className='absolute top-0 left-0 z-10 flex w-full items-center bg-transparent'>
      <div className='container'>
        <div className='relative flex items-center justify-between'>
          <div className='px-4'>
            <Link
              to='/'
              className='block py-5 text-xl font-bold text-primary lg:text-3xl'
            >
              <img src='images/logo.png' alt='' className='w-10' />
            </Link>
          </div>
          <div className='px-4'>
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
          </div>
          <nav
            className={[
              'nav-menu lg:static lg:block lg:max-w-full lg:rounded-none lg:bg-transparent lg:shadow-none',
              click
                ? 'absolute right-4 top-full w-full max-w-[15.625rem] rounded-b-lg bg-white py-5 shadow-lg'
                : 'hidden',
            ].join(' ')}
          >
            {/* Desktop View */}
            <ul className='hidden lg:flex'>
              <li className='group'>
                <a
                  href='#home'
                  className='mx-8 flex py-2 text-base text-dark group-hover:text-primary lg:mx-5 xl:mx-7'
                >
                  Beranda
                </a>
              </li>
              <li className='group'>
                <a
                  href='#about'
                  className='mx-8 flex py-2 text-base text-dark group-hover:text-primary lg:mx-5 xl:mx-7'
                >
                  Tentang Saya
                </a>
              </li>
              <li className='group'>
                <a
                  href='#portfolio'
                  className='mx-8 flex py-2 text-base text-dark group-hover:text-primary lg:mx-5 xl:mx-7'
                >
                  Portfolio
                </a>
              </li>
              <li className='group'>
                <a
                  href='#clients'
                  className='mx-8 flex py-2 text-base text-dark group-hover:text-primary lg:mx-5 xl:mx-7'
                >
                  Clients
                </a>
              </li>
              <li className='group'>
                <a
                  href='#blog'
                  className='mx-8 flex py-2 text-base text-dark group-hover:text-primary lg:mx-5 xl:mx-7'
                >
                  Blog
                </a>
              </li>
              <li className='group'>
                <a
                  href='#contact'
                  className='mx-8 flex py-2 text-base text-dark group-hover:text-primary lg:mx-5 xl:mx-7'
                >
                  Contact
                </a>
              </li>
            </ul>

            {/* Mobile view */}
            <ul className='block lg:hidden'>
              <li className='group' onClick={handleClick}>
                <a
                  href='#home'
                  className='mx-8 flex py-2 text-base text-dark group-hover:text-primary lg:mx-5 xl:mx-7'
                >
                  Beranda
                </a>
              </li>
              <li className='group' onClick={handleClick}>
                <a
                  href='#about'
                  className='mx-8 flex py-2 text-base text-dark group-hover:text-primary lg:mx-5 xl:mx-7'
                >
                  Tentang Saya
                </a>
              </li>
              <li className='group' onClick={handleClick}>
                <a
                  href='#portfolio'
                  className='mx-8 flex py-2 text-base text-dark group-hover:text-primary lg:mx-5 xl:mx-7'
                >
                  Portfolio
                </a>
              </li>
              <li className='group' onClick={handleClick}>
                <a
                  href='#clients'
                  className='mx-8 flex py-2 text-base text-dark group-hover:text-primary lg:mx-5 xl:mx-7'
                >
                  Clients
                </a>
              </li>
              <li className='group' onClick={handleClick}>
                <a
                  href='#blog'
                  className='mx-8 flex py-2 text-base text-dark group-hover:text-primary lg:mx-5 xl:mx-7'
                >
                  Blog
                </a>
              </li>
              <li className='group' onClick={handleClick}>
                <a
                  href='#contact'
                  className='mx-8 flex py-2 text-base text-dark group-hover:text-primary lg:mx-5 xl:mx-7'
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
