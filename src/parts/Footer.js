import React from 'react';
import FooterItem from '../components/FooterItem';

export default function Footer(props) {
  return (
    <footer>
      <div className='container'>
        <div className='flex flex-wrap xl:justify-center xl:space-x-14'>
          <div className='footer-item md:w-2/5 xl:w-1/4'>
            <a href='#home' className='text-4xl font-bold text-white'>
              Portfo<span className='text-primary'>lio.</span>
            </a>
            <p className='mt-5 font-normal text-slate-300'>
              A high degree of expertise in site design and development,
              generating high-quality results
            </p>
            <div className='mt-5 flex items-center text-white'>
              {props.data.map((item, index) => {
                return (
                  <a
                    key={index}
                    href={item.linkUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='svg-class'
                  >
                    <svg
                      role='img'
                      width='20'
                      height='20'
                      className='fill-current'
                      viewBox='0 0 24 24'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <title>{item.title}</title>
                      <path d={item.path} />
                    </svg>
                  </a>
                );
              })}
            </div>
          </div>

          <div className='footer-item md:w-1/4 xl:w-auto'>
            <h5 className='mb-5 text-xl font-semibold text-white'>
              Quick Links
            </h5>
            <ul className='text-slate-300'>
              <FooterItem href='#home' title='Home' />
              <FooterItem href='#about' title='About Me' />
              <FooterItem href='#experience' title='Skills' />
              <FooterItem href='#portfolio' title='Portfolio' />
              <FooterItem href='#blog' title='Blog' />
            </ul>
          </div>

          <div className='footer-item md:w-1/3 xl:w-auto'>
            <h5 className='mb-5 text-xl font-semibold text-white'>
              Recent Post
            </h5>
            <ul className='text-slate-300'>
              <FooterItem href='#blog' title='Tips Belajar Programming' />
              <FooterItem href='#blog' title='Review Keyboard GMMK Pro' />
              <FooterItem
                href='#blog'
                title='Penulisan Syntax Code yang Benar'
              />
            </ul>
          </div>

          <div className='footer-item md:w-1/3 xl:w-auto'>
            <h5 className='mb-5 text-xl font-semibold text-white'>
              Connect Us
            </h5>
            <ul className='text-slate-300'>
              <FooterItem
                href='mailto:delfiandra.yogi@gmail.com'
                title='delfiandra.yogi@gmail.com'
              />
              <FooterItem href='tel:+6282169791188' title='+62-821-6979-1188' />

              <li>
                <span className='mb-3 inline-block text-base'>
                  Tualang, Kabupaten Siak
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className='w-full border-t border-slate-800 pt-7 text-center text-sm font-medium text-slate-500 md:flex md:justify-between md:px-4'>
          <p className='mb-1'>
            Copyright &#169; 2022 - 2023. All rights reserved
          </p>
          <p>
            {' '}
            Design & Developed by{' '}
            <a
              href='https://www.instagram.com/dosenkoding/'
              target='_blank'
              rel='noopener noreferrer'
              className='font-semibold text-primary hover:text-opacity-80'
            >
              dosenkoding
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
