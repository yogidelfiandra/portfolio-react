import React from 'react';
// import required modules
import { Autoplay, Pagination } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function Portfolio(props) {
  return (
    <section id='portfolio' className='pt-36 pb-16'>
      <div className='container'>
        <div className='w-full px-4'>
          <div className='mx-auto mb-16 max-w-xl text-center'>
            <h3 className='mb-2 text-lg font-semibold text-primary'>
              Portfolio
            </h3>
            <h4 className='mb-4 text-3xl font-bold text-dark sm:text-4xl lg:text-5xl'>
              Project Terbaru
            </h4>
            <p className='text- text-base font-medium text-secondary md:text-lg'>
              Beberapa karya terbaik saya
            </p>
          </div>
        </div>
        <Swiper
          className='swiper-autoplay'
          slidesPerView={1}
          spaceBetween={30}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
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
                  <div className='overflow-hidden rounded-md shadow-md'>
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className='w-full'
                    />
                  </div>
                </a>
                <h5 className='mt-5 mb-3 text-xl font-semibold text-dark'>
                  {item.title}
                </h5>
                <p className='text-base font-medium text-secondary'>
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
