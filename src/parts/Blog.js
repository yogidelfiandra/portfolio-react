import React from 'react';
import { TiArrowRightThick } from 'react-icons/ti';
import { Link } from 'react-router-dom';
// import required modules
import { Autoplay, Pagination } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import SubHeader from '../components/SubHeader';

export default function Blog(props) {
  return (
    <section id='blog' className='blog-section'>
      <div className='container'>
        <SubHeader
          title='Blog'
          subtitle='Latest Blog'
          paragraph='Read Inspirational Story Every Week'
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
                <div className='mb-10 overflow-hidden rounded-xl bg-white shadow-lg transition duration-500 hover:shadow-md dark:bg-dark dark:shadow-slate-600'>
                  <Link to={`/blog/${item._id}/detail`}>
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className='w-full'
                    />
                  </Link>
                  <div className='py-8 px-6'>
                    <span className='text-base text-secondary'>
                      {item.date}
                    </span>
                    <h5 className='my-4 block h-14 text-lg font-semibold text-dark  dark:text-white xl:text-xl'>
                      {item.title}
                    </h5>
                    <Link
                      to={`/blog/${item._id}/detail`}
                      className='flex w-1/2 items-center text-base font-normal text-primary transition duration-500 ease-in hover:opacity-80'
                    >
                      Read More <TiArrowRightThick className='ml-2' />
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
