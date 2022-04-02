import React from 'react';

export default function Hero() {
  return (
    <section id='home' className='pt-36'>
      <div className='container'>
        <div className='flex flex-wrap'>
          <div className='w-full self-center px-4 lg:w-1/2'>
            <h1 className='text-base font-semibold text-primary md:text-xl'>
              Halo semua 👋, saya{' '}
              <span className='block font-bold text-4xl mt-1 mb-1.5 text-dark lg:text-5xl'>
                Yogi Delfiandra
              </span>
            </h1>
            <h2 className='font-medium text-slate-500 text-lg mb-5 lg:text-2xl'>
              Junior Web Developer &{' '}
              <span className='text-dark'>Content Creator</span>
            </h2>
            <p className='font-medium text-slate-400 mb-10 leading-relaxed'>
              Belajar Web Programming itu menyenangkan bukan.{' '}
              <span className='text-dark font-bold'>bukan!</span>
            </p>

            <a
              href='#'
              className='bg-primary text-base px-8 py-3 text-white rounded-full hover:shadow-sm hover:opacity-90 transition duration-300 ease-in-out'
            >
              Hubungi Saya
            </a>
          </div>
          <div className='w-full self-end px-4 lg:w-1/2'>
            <div className='relative mt-10 lg:mt-0 lg:right-0'>
              <img
                src='images/yogidelfiandra.png'
                alt='yogidelfiandra'
                className='max-w-full mx-auto lg:w-3/4'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
