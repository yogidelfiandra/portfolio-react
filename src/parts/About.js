import React from 'react';

export default function About(props) {
  return (
    <section id='about' className='about-section'>
      <div className='container'>
        <div className='flex flex-wrap items-center'>
          <div className='column-2 mb-20 lg:mb-0'>
            <h3 className='sub-title mb-2'>About Me</h3>
            <h4 className='mb-3 text-xl font-bold text-dark dark:text-white md:text-3xl lg:pt-2 lg:text-4xl'>
              Developer <span className='text-primary'>& Designer</span>
            </h4>
            <p className='paragraph max-w-xl'>
              I work as a web developer on the front end. I can deliver
              pixel-perfect design and tidy coding. I also use web animations to
              make the website more engaging. Your website will be accessible to
              all users, regardless of their device, with a responsive design.
            </p>
            <p className='paragraph pt-5 pb-3'>Connect with me:</p>
            <div className='flex items-center'>
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
          <div className='column-2'>
            <span className='animate-pulse rounded-md bg-primary p-2 text-[10px] font-semibold text-dark'>
              coming soon
            </span>
            <h4 className='mt-3 mb-5 text-xl font-semibold leading-8 text-dark dark:text-white sm:max-w-md md:text-2xl lg:max-w-lg lg:text-3xl'>
              Learn Web Programming <br className='sm:hidden' /> at{' '}
              <a
                href='/kodinghack'
                target='_blank'
                rel='noopener noreferrer'
                className='text-primary'
              >
                kodingHack
              </a>
              !{' '}
            </h4>
            <p className='paragraph max-w-xl'>
              kodingHack is a digital platform that makes learning web
              programming simple for friends. It is envisaged that this platform
              will assist friends in becoming reliable web developers and
              contributing to the digital IT sector.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
