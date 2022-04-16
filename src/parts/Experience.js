import React from 'react';
import { BsPatchCheckFill } from 'react-icons/bs';

export default function Experience(props) {
  return (
    <section
      id='experience'
      className='bg-slate-100 pt-36 pb-32 dark:bg-slate-700'
    >
      <div className='container'>
        <div className='w-full px-4'>
          <div className='mx-auto mb-16 max-w-xl text-center'>
            <h3 className='mb-2 text-lg font-semibold text-primary'>Skills</h3>
            <h4 className='mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl lg:text-5xl'>
              Keterampilan Teknis
            </h4>
            <p className='text- text-base font-medium text-secondary md:text-lg'>
              Kumpulan teknologi yang saya gunakan <br className='' /> untuk
              membangun sebuah aplikasi web
            </p>
          </div>
        </div>

        <div className='flex flex-wrap justify-center'>
          {props.data.map((item, index1) => {
            return (
              <div
                key={index1}
                className='mb-12 w-full px-4 sm:w-[500px] md:w-[600px] lg:mb-0 lg:w-1/2 lg:px-4'
              >
                <div className='rounded-xl bg-slate-800 py-4 text-center text-white shadow-sm transition duration-500 hover:bg-slate-700 dark:bg-dark dark:hover:bg-slate-800'>
                  <h5 className='mb-5 py-6 text-lg font-bold xl:mb-10  xl:text-xl'>
                    {item.title}
                  </h5>

                  <div className='flex w-full flex-wrap sm:px-10 md:px-10'>
                    {item.features.map((feature, index2) => {
                      return (
                        <div
                          key={`skills-${index1}-feature-${index2}`}
                          className='mb-12 flex w-1/2 items-center px-6 md:mb-10 md:px-16 lg:px-10 xl:px-16 '
                        >
                          <BsPatchCheckFill
                            size={16}
                            color={'#10b981'}
                            style={{ marginTop: 3 }}
                          />
                          <div className='pl-4 text-left'>
                            <h6 className='text-sm font-bold md:text-base xl:text-[17px]'>
                              {feature.name}
                            </h6>
                            <p className='text-xs md:text-sm xl:text-[15px]'>
                              {feature.level}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
