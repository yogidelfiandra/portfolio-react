import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className='bg-dark pt-24 pb-7 dark:border-t dark:border-slate-800 '>
      <div className='container'>
        <div className='flex flex-wrap'>
          <div className='mb-12 w-full px-4 font-medium text-slate-300 md:w-1/3'>
            <h3 className='mb-5 text-4xl font-bold text-white'>kodingHack</h3>
            <h4 className='mb-2 text-2xl font-bold'>Hubungi Kami</h4>
            <p>yogi.delfiandra03@gmail.com</p>
            <p>Jalan Pelajar Gg. Pelajar 4</p>
            <p>Kabupaten Siak, Riau</p>
          </div>

          <div className='mb-12 w-full px-4 md:w-1/3'>
            <h5 className='mb-5 text-xl font-semibold text-white'>
              Kategori Tulisan
            </h5>
            <ul className='text-slate-300'>
              <li>
                <Link
                  to='/programming'
                  className='mb-3 inline-block text-base hover:text-primary'
                >
                  Programming
                </Link>
              </li>
              <li>
                <Link
                  to='/technology'
                  className='mb-3 inline-block text-base hover:text-primary'
                >
                  Technology
                </Link>
              </li>
              <li>
                <Link
                  to='/lifestyle'
                  className='mb-3 inline-block text-base hover:text-primary'
                >
                  Lifestyle
                </Link>
              </li>
            </ul>
          </div>

          <div className='mb-12 w-full px-4 md:w-1/3'>
            <h5 className='mb-5 text-xl font-semibold text-white'>Tautan</h5>
            <ul className='text-slate-300'>
              <li>
                <a
                  href='#home'
                  className='mb-3 inline-block text-base hover:text-primary'
                >
                  Beranda
                </a>
              </li>
              <li>
                <a
                  href='#about'
                  className='mb-3 inline-block text-base hover:text-primary'
                >
                  Tentang Saya
                </a>
              </li>
              <li>
                <a
                  href='#portfolio'
                  className='mb-3 inline-block text-base hover:text-primary'
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href='#blog'
                  className='mb-3 inline-block text-base hover:text-primary'
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href='#contact'
                  className='mb-3 inline-block text-base hover:text-primary'
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className='w-full border-t border-slate-800 pt-7'>
          <p className='text-center text-sm font-medium text-slate-500'>
            Dibuat oleh{' '}
            <a
              href='https://www.instagram.com/yogidelfiandra/'
              target='_blank'
              rel='noopener noreferrer'
              className='font-bold text-primary'
            >
              Yogi Delfiandra
            </a>{' '}
            <br className='md:hidden' />
            menggunakan{' '}
            <a
              href='https://tailwindcss.com/'
              target='_blank'
              rel='noopener noreferrer'
              className='font-bold text-sky-500'
            >
              Tailwind CSS
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
