import React from 'react';
import { BsPatchCheckFill } from 'react-icons/bs';

export default function Experience(props) {
  return (
    <section id='experience' className='pt-36 pb-32 bg-slate-100'>
      <div className='container'>
        <div className='w-full px-4'>
          <div className='max-w-xl mx-auto text-center mb-16'>
            <h3 className='font-semibold text-lg text-primary mb-2'>Skills</h3>
            <h4 className='font-bold text-dark text-3xl sm:text-4xl lg:text-5xl mb-4'>
              Keterampilan Teknis
            </h4>
            <p className='font-medium text-base text- text-secondary md:text-lg'>
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
                className='mb-12 w-full mx-auto sm:w-[500px] md:w-[600px] lg:w-1/2 lg:mb-0 lg:px-4'
              >
                <div className='bg-slate-800 hover:bg-slate-700 transition duration-500 py-4 text-white rounded-xl shadow-sm text-center '>
                  <h5 className='font-bold text-lg xl:text-xl py-6 mb-5  xl:mb-10'>
                    {item.title}
                  </h5>

                  <div className='w-full flex flex-wrap px-5 sm:px-10 md:px-10'>
                    {item.features.map((feature, index2) => {
                      return (
                        <div
                          key={`skills-${index1}-feature-${index2}`}
                          className='mb-12 w-1/2 px-6 md:mb-10 md:px-16 lg:px-10 xl:px-16 flex items-center '
                        >
                          <BsPatchCheckFill
                            size={16}
                            color={'#10b981'}
                            style={{ marginTop: 3 }}
                          />
                          <div className='pl-4 text-left'>
                            <h6 className='font-bold text-sm md:text-base xl:text-[17px]'>
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
