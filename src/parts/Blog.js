import React from 'react';
import { Link } from 'react-router-dom';
// import required modules
import { Autoplay, Pagination } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function Blog(props) {
  return (
    <section id='blog' className='bg-slate-100 pt-36 pb-32 dark:bg-slate-700'>
      <div className='container'>
        <div className='w-full px-4'>
          <div className='mx-auto mb-16 max-w-xl text-center'>
            <h3 className='mb-2 text-lg font-semibold text-primary'>Blog</h3>
            <h4 className='mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl lg:text-5xl'>
              Tulisan Terkini
            </h4>
            <p className='text- text-base font-medium text-secondary md:text-lg'>
              Berbagi cerita melalui sebuah tulisan terkait{' '}
              <br className='hidden lg:block' /> web developer dan sebagainya
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
                <div className='mb-10 overflow-hidden rounded-xl bg-white shadow-lg dark:bg-dark'>
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className='w-full'
                  />
                  <div className='py-8 px-6'>
                    <h5>
                      <Link
                        to={`/blog/${item._id}/detail`}
                        className='mb-3 block truncate text-lg font-semibold text-dark hover:text-primary dark:text-white dark:hover:text-primary xl:text-xl'
                      >
                        {item.title}
                      </Link>
                    </h5>
                    <p className='mb-6 text-base font-medium text-secondary'>
                      {item.description}
                    </p>
                    <Link
                      to={`/blog/${item._id}/detail`}
                      className='rounded-lg bg-primary py-2 px-4 text-sm font-medium text-white hover:opacity-80'
                    >
                      Baca Selengkapnya
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
