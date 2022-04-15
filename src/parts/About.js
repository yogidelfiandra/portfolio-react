import React from 'react';

export default function About(props) {
  return (
    <section id='about' className='pt-36 pb-32'>
      <div className='container'>
        <div className='flex flex-wrap'>
          <div className='mb-10 w-full px-4 lg:w-1/2'>
            <h3 className='mb-2 text-lg font-bold text-primary'>About Me</h3>
            <h4 className='mb-5 max-w-md text-xl font-bold text-dark md:text-3xl lg:max-w-lg lg:text-4xl'>
              Yuk, belajar web programming <br className='sm:hidden' /> di{' '}
              <a
                href='/kodinghack'
                target='_blank'
                rel='noopener noreferrer'
                className='text-primary'
              >
                kodingHack
              </a>
              !
            </h4>
            <p className='max-w-xl text-base font-medium text-secondary lg:text-lg'>
              Sebuah Platform Digital yang memudahkan teman-teman mempelajari
              web programming. Dengan adanya platform ini, diharapkan dapat
              membantu teman-teman untuk menjadi web developer yang handal dan
              mampu berkontribusi dalam dunia digital IT.
            </p>
          </div>
          <div className='w-full px-4 lg:w-1/2'>
            <h5 className='mb-4 text-xl font-semibold text-dark md:text-2xl lg:pt-10 lg:text-3xl'>
              Mari berteman
            </h5>
            <p className='mb-6 text-base font-medium text-secondary lg:text-lg'>
              Tak kenal maka tak sayang, itulah istilah yang sering digunakan
              untuk menyatakan apabila kita tidak mengenal seseorang, maka kita
              tidak memiliki perhatian kepada orang tersebut. Untuk itu, jangan
              lupa follow akun saya dibawah ya 😁
            </p>
            <div className='flex items-center'>
              {props.data.map((item, index) => {
                return (
                  <a
                    key={index + 1}
                    href={item.linkUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='mr-3 flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 hover:border-2 hover:border-primary'
                  >
                    <img src={item.imageUrl} alt={item.title} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
