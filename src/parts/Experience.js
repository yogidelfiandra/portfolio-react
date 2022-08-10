import React from 'react';
import { BsPatchCheckFill } from 'react-icons/bs';
import SubHeader from '../components/SubHeader';

export default function Experience(props) {
  return (
    <section id='experience' className='experience-section'>
      <div className='container'>
        <SubHeader
          title='Skills'
          subtitle='My Experience'
          paragraph='Some of the tools I use to build web applications'
        />

        <div className='flex flex-wrap justify-center'>
          {props.data.map((item, index1) => {
            return (
              <div key={index1} className='column-3'>
                <div className='card'>
                  <h5 className='mb-5 py-6 text-lg font-bold xl:mb-10 xl:text-xl'>
                    {item.title}
                  </h5>

                  <div className='card-item'>
                    {item.features.map((feature, index2) => {
                      return (
                        <div
                          key={`skills-${index1}-feature-${index2}`}
                          className='skill-item'
                        >
                          <BsPatchCheckFill
                            size={16}
                            color={'#10b981'}
                            style={{ marginTop: 3 }}
                          />
                          <div className='pl-4 text-left'>
                            <h6 className='text-sm font-semibold md:text-base xl:text-[17px]'>
                              {feature.name}
                            </h6>
                            <p className='text-xs font-normal md:text-sm xl:text-[15px]'>
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
