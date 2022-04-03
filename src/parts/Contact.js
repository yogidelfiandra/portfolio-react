import React from 'react';

export default function Contact() {
  return (
    <section id='contact' className='pt-36 pb-32'>
      <div className='container'>
        <div className='w-full px-4'>
          <div className='max-w-xl mx-auto text-center mb-16'>
            <h3 className='font-semibold text-lg text-primary mb-2'>Contact</h3>
            <h4 className='font-bold text-dark text-3xl sm:text-4xl lg:text-5xl mb-4'>
              Hubungi Kami
            </h4>
            <p className='font-medium text-base text- text-secondary md:text-lg'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Accusamus nisi nihil perspiciatis saepe!
            </p>
          </div>
        </div>

        <form>
          <div className='w-full lg:w-2/3 lg:mx-auto'>
            <div className='w-full px-4 mb-8'>
              <label
                htmlFor='nama'
                className='text-base font-bold text-primary'
              >
                Nama
              </label>
              <input
                type='text'
                id='nama'
                className='w-full bg-slate-200 text-dark mt-2 p-3 rounded-md caret-primary focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary'
              />
            </div>
            <div className='w-full px-4 mb-8'>
              <label
                htmlFor='email'
                className='text-base font-bold text-primary'
              >
                Email
              </label>
              <input
                type='email'
                id='email'
                className='w-full bg-slate-200 text-dark mt-2 p-3 rounded-md caret-primary focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary'
              />
            </div>
            <div className='w-full px-4 mb-8'>
              <label
                htmlFor='pesan'
                className='text-base font-bold text-primary'
              >
                Pesan
              </label>
              <textarea
                type='text'
                id='pesan'
                className='w-full bg-slate-200 text-dark mt-2 p-3 rounded-md caret-primary focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary h-36'
              ></textarea>
            </div>
            <div className='w-full px-4'>
              <button className='text-base font-semibold text-white bg-primary py-3 rounded-full w-full hover:opacity-80 hover:shadow-lg transition duration-500'>
                Kirim
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
