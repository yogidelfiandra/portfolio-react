import React from 'react';

export default function Portfolio() {
  return (
    <section id='portfolio' className='pt-36 pb-16'>
      <div className='container'>
        <div className='w-full px-4'>
          <div className='max-w-xl mx-auto text-center mb-16'>
            <h3 className='font-semibold text-lg text-primary mb-2'>
              Portfolio
            </h3>
            <h4 className='font-bold text-dark text-3xl sm:text-4xl lg:text-5xl mb-4'>
              Project Terbaru
            </h4>
            <p className='font-medium text-base text- text-secondary md:text-lg'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio sed
              ex soluta voluptate, veritatis reiciendis culpa eos debitis
              consectetur ullam.
            </p>
          </div>
        </div>
        <div className='w-full px-4 flex flex-wrap justify-center'>
          <div className='mb-12 md:px-3 md:w-1/2 lg:w-1/4'>
            <div className='rounded-md shadow-md overflow-hidden'>
              <img
                src='images/portfolio-1.png'
                alt='staycation'
                className='w-full'
              />
            </div>
            <h5 className='font-semibold text-xl text-dark mt-5 mb-3'>
              Staycation Web
            </h5>
            <p className='font-medium text-base text-secondary'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis, placeat?
            </p>
          </div>
          <div className='mb-12 md:px-3 md:w-1/2 lg:w-1/4'>
            <div className='rounded-md shadow-md overflow-hidden'>
              <img
                src='images/portfolio-2.png'
                alt='luxspace'
                className='w-full'
              />
            </div>
            <h5 className='font-semibold text-xl text-dark mt-5 mb-3'>
              Luxspace Web
            </h5>
            <p className='font-medium text-base text-secondary'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis, placeat?
            </p>
          </div>
          <div className='mb-12 md:px-3 md:w-1/2 lg:w-1/4'>
            <div className='rounded-md shadow-md overflow-hidden'>
              <img
                src='images/portfolio-3.png'
                alt='marketplace'
                className='w-full'
              />
            </div>
            <h5 className='font-semibold text-xl text-dark mt-5 mb-3'>
              Marketplace
            </h5>
            <p className='font-medium text-base text-secondary'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis, placeat?
            </p>
          </div>
          <div className='mb-12 md:px-3 md:w-1/2 lg:w-1/4'>
            <div className='rounded-md shadow-md overflow-hidden'>
              <img
                src='images/portfolio-4.png'
                alt='travel'
                className='w-full'
              />
            </div>
            <h5 className='font-semibold text-xl text-dark mt-5 mb-3'>
              Travel Web
            </h5>
            <p className='font-medium text-base text-secondary'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis, placeat?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
