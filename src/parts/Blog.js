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
    <section id='blog' className='pt-36 pb-32 bg-slate-100'>
      <div className='container'>
        <div className='w-full px-4'>
          <div className='max-w-xl mx-auto text-center mb-16'>
            <h3 className='font-semibold text-lg text-primary mb-2'>Blog</h3>
            <h4 className='font-bold text-dark text-3xl sm:text-4xl lg:text-5xl mb-4'>
              Tulisan Terkini
            </h4>
            <p className='font-medium text-base text- text-secondary md:text-lg'>
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
                <div className='bg-white rounded-xl shadow-lg overflow-hidden mb-10'>
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className='w-full'
                  />
                  <div className='py-8 px-6'>
                    <h5>
                      <Link
                        to={`/blog/${item._id}/detail`}
                        className='block mb-3 font-semibold text-lg xl:text-xl text-dark hover:text-primary truncate'
                      >
                        {item.title}
                      </Link>
                    </h5>
                    <p className='font-medium text-base text-secondary mb-6'>
                      {item.description}
                    </p>
                    <Link
                      to={`/blog/${item._id}/detail`}
                      className='font-medium text-sm text-white bg-primary py-2 px-4 rounded-lg hover:opacity-80'
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
