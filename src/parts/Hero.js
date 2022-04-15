import React from 'react';

export default function Hero() {
  return (
    <section id='home' className='pt-36'>
      <div className='container'>
        <div className='flex flex-wrap'>
          <div className='w-full self-center px-4 md:w-1/2'>
            <h1 className='text-base font-semibold text-primary md:text-xl'>
              Halo semua 👋, saya{' '}
              <span className='mt-1 mb-1.5 block text-4xl font-bold text-dark lg:text-5xl'>
                Yogi Delfiandra
              </span>
            </h1>
            <h2 className='mb-5 text-lg font-medium text-secondary lg:text-2xl'>
              Web Developer & <span className='text-dark'>Content Creator</span>
            </h2>
            <p className='mb-10 font-medium leading-relaxed text-secondary'>
              Pengalaman tingkat tinggi dalam pengembang web,{' '}
              <br className='' /> menghasilkan pekerjaan yang berkualitas
            </p>

            <div className='flex space-x-2'>
              <a
                href='https://api.whatsapp.com/send?phone=6282382614275&text=hello%20yogi!'
                target='_blank'
                rel='noopener noreferrer'
                className='btn-primary'
              >
                Hubungi Saya
              </a>
              <a
                href='https://drive.google.com/file/d/1LFYIeeoKe2SSUk8o-mhoDUKCtiviA06a/view?usp=sharing'
                target='_blank'
                rel='noopener noreferrer'
                className='btn-secondary'
              >
                Download CV
              </a>
            </div>
          </div>
          <div className='w-full self-end px-4 md:w-1/2'>
            <div className='relative mt-10 md:mt-0 lg:right-0 lg:mt-0'>
              <img
                src='images/yogidelfiandra.png'
                alt='yogidelfiandra'
                className='mx-auto max-w-full md:w-3/4'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
