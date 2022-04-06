import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className='bg-dark pt-24 pb-7'>
      <div className='container'>
        <div className='flex flex-wrap'>
          <div className='w-full px-4 mb-12 text-slate-300 font-medium md:w-1/3'>
            <h3 className='font-bold text-4xl text-white mb-5'>kodingHack</h3>
            <h4 className='font-bold text-2xl mb-2'>Hubungi Kami</h4>
            <p>yogi.delfiandra03@gmail.com</p>
            <p>Jalan Pelajar Gg. Pelajar 4</p>
            <p>Kabupaten Siak, Riau</p>
          </div>

          <div className='w-full px-4 mb-12 md:w-1/3'>
            <h5 className='font-semibold text-xl text-white mb-5'>
              Kategori Tulisan
            </h5>
            <ul className='text-slate-300'>
              <li>
                <Link
                  to='/programming'
                  className='inline-block text-base hover:text-primary mb-3'
                >
                  Programming
                </Link>
              </li>
              <li>
                <Link
                  to='/technology'
                  className='inline-block text-base hover:text-primary mb-3'
                >
                  Technology
                </Link>
              </li>
              <li>
                <Link
                  to='/lifestyle'
                  className='inline-block text-base hover:text-primary mb-3'
                >
                  Lifestyle
                </Link>
              </li>
            </ul>
          </div>

          <div className='w-full px-4 mb-12 md:w-1/3'>
            <h5 className='font-semibold text-xl text-white mb-5'>Tautan</h5>
            <ul className='text-slate-300'>
              <li>
                <a
                  href='#home'
                  className='inline-block text-base hover:text-primary mb-3'
                >
                  Beranda
                </a>
              </li>
              <li>
                <a
                  href='#about'
                  className='inline-block text-base hover:text-primary mb-3'
                >
                  Tentang Saya
                </a>
              </li>
              <li>
                <a
                  href='#portfolio'
                  className='inline-block text-base hover:text-primary mb-3'
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href='#blog'
                  className='inline-block text-base hover:text-primary mb-3'
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href='#contact'
                  className='inline-block text-base hover:text-primary mb-3'
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className='w-full pt-7 border-t border-slate-800'>
          <p className='font-medium text-sm text-slate-500 text-center'>
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
