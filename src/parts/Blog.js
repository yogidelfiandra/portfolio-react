import React from 'react';
import { Link } from 'react-router-dom';

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
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam,
              doloremque! Magni, ea deserunt!
            </p>
          </div>
        </div>

        <div className='flex flex-wrap'>
          {props.data.map((item, index) => {
            return (
              <div key={item._id} className='w-full px-4 lg:w-1/2 xl:w-1/3'>
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
              </div>
            );
          })}
          {/* <div className='w-full px-4 lg:w-1/2 xl:w-1/3'>
            <div className='bg-white rounded-xl shadow-lg overflow-hidden mb-10'>
              <img
                src='https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                alt='programming'
                className='w-full'
              />
              <div className='py-8 px-6'>
                <h5>
                  <Link
                    to='#'
                    className='block mb-3 font-semibold text-lg xl:text-xl text-dark hover:text-primary truncate'
                  >
                    Tips Belajar Programming
                  </Link>
                </h5>
                <p className='font-medium text-base text-secondary mb-6'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic,
                  eum.
                </p>
                <Link
                  to='/tips-belajar-programming'
                  className='font-medium text-sm text-white bg-primary py-2 px-4 rounded-lg hover:opacity-80'
                >
                  Baca Selengkapnya
                </Link>
              </div>
            </div>
          </div>
          <div className='w-full px-4 lg:w-1/2 xl:w-1/3'>
            <div className='bg-white rounded-xl shadow-lg overflow-hidden mb-10'>
              <img
                src='https://images.unsplash.com/photo-1558050032-8e05d4037d2f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                alt='mechanical keyboard'
                className='w-full'
              />
              <div className='py-8 px-6'>
                <h5>
                  <Link
                    to='#'
                    className='block mb-3 font-semibold text-lg xl:text-xl text-dark hover:text-primary truncate'
                  >
                    Review Keyboard GMMK Pro
                  </Link>
                </h5>
                <p className='font-medium text-base text-secondary mb-6'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo
                  doloribus autem vel!
                </p>
                <Link
                  to='/review-keyboard-gmmk-pro'
                  className='font-medium text-sm text-white bg-primary py-2 px-4 rounded-lg hover:opacity-80'
                >
                  Baca Selengkapnya
                </Link>
              </div>
            </div>
          </div>
          <div className='w-full px-4 lg:w-1/2 xl:w-1/3'>
            <div className='bg-white rounded-xl shadow-lg overflow-hidden mb-10'>
              <img
                src='https://images.unsplash.com/photo-1518818608552-195ed130cdf4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                alt='programming'
                className='w-full'
              />
              <div className='py-8 px-6'>
                <h5>
                  <Link
                    to='#'
                    className='block mb-3 font-semibold text-lg xl:text-xl text-dark hover:text-primary truncate'
                  >
                    Penulisan syntax code yang benar
                  </Link>
                </h5>
                <p className='font-medium text-base text-secondary mb-6'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores!
                </p>
                <Link
                  to='/penulisan-syntax-code-yang-benar'
                  className='font-medium text-sm text-white bg-primary py-2 px-4 rounded-lg hover:opacity-80'
                >
                  Baca Selengkapnya
                </Link>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
