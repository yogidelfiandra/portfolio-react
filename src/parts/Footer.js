import React from 'react';

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
              High degree of expertise in site design and development,
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
              <li>
                <a
                  href='#home'
                  className='mb-3 inline-block text-base hover:text-primary'
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href='#about'
                  className='mb-3 inline-block text-base hover:text-primary'
                >
                  About Me
                </a>
              </li>
              <li>
                <a
                  href='#experience'
                  className='mb-3 inline-block text-base hover:text-primary'
                >
                  Skills
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
            </ul>
          </div>
          <div className='footer-item md:w-1/3 xl:w-auto'>
            <h5 className='mb-5 text-xl font-semibold text-white'>
              Recent Post
            </h5>
            <ul className='text-slate-300'>
              <li>
                <a
                  href='#blog'
                  className='mb-3 inline-block text-base hover:text-primary'
                >
                  Tips Belajar Programming
                </a>
              </li>
              <li>
                <a
                  href='#blog'
                  className='mb-3 inline-block text-base hover:text-primary'
                >
                  Review Keyboard GMMK Pro
                </a>
              </li>
              <li>
                <a
                  href='#blog'
                  className='mb-3 inline-block text-base hover:text-primary'
                >
                  Penulisan syntax code yang benar
                </a>
              </li>
            </ul>
          </div>

          <div className='footer-item md:w-1/3 xl:w-auto'>
            <h5 className='mb-5 text-xl font-semibold text-white'>
              Connect Us
            </h5>
            <ul className='text-slate-300'>
              <li>
                <a
                  href='mailto:delfiandra.yogi@gmail.com'
                  className='mb-3 inline-block text-base hover:text-primary'
                >
                  delfiandra.yogi@gmail.com
                </a>
              </li>
              <li>
                <a
                  href='tel:+6282303251996'
                  className='mb-3 inline-block text-base hover:text-primary'
                >
                  0823-0325-1996
                </a>
              </li>
              <li>
                <span className='mb-3 inline-block text-base'>
                  Riau, Indonesia
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className='w-full border-t border-slate-800 pt-7 text-center text-sm font-medium text-slate-500 md:flex md:justify-between md:px-4'>
          <p className='mb-1'>Copyright &#169; 2022. All rights reserved</p>
          <p>
            {' '}
            Design & Developed by{' '}
            <a
              href='https://www.instagram.com/yogidelfiandra/'
              target='_blank'
              rel='noopener noreferrer'
              className='font-semibold text-primary hover:text-opacity-80'
            >
              yogidelfiandra
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
