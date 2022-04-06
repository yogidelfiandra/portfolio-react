import React from 'react';

export default function About(props) {
  return (
    <section id='about' className='pt-36 pb-32'>
      <div className='container'>
        <div className='flex flex-wrap'>
          <div className='w-full px-4 mb-10 lg:w-1/2'>
            <h3 className='font-bold uppercase text-primary text-lg mb-2'>
              Tentang Saya
            </h3>
            <h4 className='font-bold text-dark text-xl md:text-3xl mb-5 max-w-md lg:text-4xl lg:max-w-lg'>
              Yuk, belajar web programming di kodingHack !
            </h4>
            <p className='font-medium text-base text-secondary max-w-xl lg:text-lg'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum
              eaque nisi voluptatum adipisci.
            </p>
          </div>
          <div className='w-full px-4 lg:w-1/2'>
            <h5 className='font-semibold text-dark text-xl md:text-2xl mb-4 lg:text-3xl lg:pt-10'>
              Mari berteman
            </h5>
            <p className='font-medium text-base text-secondary mb-6 lg:text-lg'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum nisi
              commodi consequatur suscipit natus mollitia optio nam voluptatum.
            </p>
            <div className='flex items-center'>
              {props.data.map((item, index) => {
                return (
                  <a
                    key={index + 1}
                    href={item.linkUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='w-9 h-9 mr-3 flex justify-center items-center border rounded-full border-slate-300 hover:border-primary hover:border-2'
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
