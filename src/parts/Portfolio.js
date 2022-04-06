import React from 'react';

export default function Portfolio(props) {
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
          {props.data.map((item, index) => {
            return (
              <div key={item._id} className='mb-12 sm:px-3 sm:w-1/2 lg:w-1/4'>
                <a
                  href='/link-website'
                  target='_blank'
                  rel='noopener noreferrer'
                  className=''
                >
                  <div className='rounded-md shadow-md overflow-hidden'>
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className='w-full'
                    />
                  </div>
                </a>
                <h5 className='font-semibold text-xl text-dark mt-5 mb-3'>
                  {item.title}
                </h5>
                <p className='font-medium text-base text-secondary'>
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
