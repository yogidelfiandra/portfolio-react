import React from 'react';
// import required modules
import { Autoplay, Pagination } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import SubHeader from '../components/SubHeader';

export default function Portfolio(props) {
  return (
    <section id='portfolio' className='portfolio-section'>
      <div className='container'>
        <SubHeader
          title='Portfolio'
          subtitle='My Projects'
          paragraph='Most Recent Projects'
        />

        <Swiper
          className='swiper-autoplay'
          slidesPerView={1}
          spaceBetween={30}
          autoplay={{ delay: 8000, disableOnInteraction: false }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          modules={[Autoplay, Pagination]}
        >
          {props.data.map((item, index) => {
            return (
              <SwiperSlide key={item._id} className=''>
                <a
                  href={item.linkUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                  className=''
                >
                  <div className='overflow-hidden rounded-md shadow-lg transition duration-500 hover:shadow-md dark:shadow-slate-600'>
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className='w-full'
                    />
                  </div>
                </a>
                <h5 className='mt-5 mb-3 text-xl font-medium text-dark dark:text-white'>
                  {item.title}
                </h5>
                <p className='text-base font-normal text-secondary'>
                  {item.description}
                </p>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
