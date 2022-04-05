import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
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
    <header className='bg-transparent absolute top-0 left-0 w-full flex items-center z-10'>
      <div className='container'>
        <div className='flex items-center justify-between relative'>
          <div className='px-4'>
            <Link
              to='/'
              className='font-bold text-xl lg:text-3xl text-primary block py-6'
            >
              yogidelfiandra
            </Link>
          </div>
          <div className='px-4 cursor-pointer lg:hidden' onClick={handleClick}>
            {click ? <FaTimes size={20} /> : <FaBars size={20} />}
          </div>
          <nav
            className={[
              'nav-menu lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none',
              click
                ? 'absolute py-5 bg-white shadow-lg rounded-lg max-w-[15.625rem] w-full right-4 top-full'
                : 'hidden',
            ].join(' ')}
          >
            <ul className='block lg:flex'>
              <li className='group'>
                <a
                  href='#home'
                  className='text-base lg:text-lg text-dark py-2 mx-8 lg:mx-5 xl:mx-7 flex group-hover:text-primary'
                >
                  Beranda
                </a>
              </li>
              <li className='group'>
                <a
                  href='#about'
                  className='text-base lg:text-lg text-dark py-2 mx-8 lg:mx-5 xl:mx-7 flex group-hover:text-primary'
                >
                  Tentang Saya
                </a>
              </li>
              <li className='group'>
                <a
                  href='#portfolio'
                  className='text-base lg:text-lg text-dark py-2 mx-8 lg:mx-5 xl:mx-7 flex group-hover:text-primary'
                >
                  Portfolio
                </a>
              </li>
              <li className='group'>
                <a
                  href='#clients'
                  className='text-base lg:text-lg text-dark py-2 mx-8 lg:mx-5 xl:mx-7 flex group-hover:text-primary'
                >
                  Clients
                </a>
              </li>
              <li className='group'>
                <a
                  href='#blog'
                  className='text-base lg:text-lg text-dark py-2 mx-8 lg:mx-5 xl:mx-7 flex group-hover:text-primary'
                >
                  Blog
                </a>
              </li>
              <li className='group'>
                <a
                  href='#contact'
                  className='text-base lg:text-lg text-dark py-2 mx-8 lg:mx-5 xl:mx-7 flex group-hover:text-primary'
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
