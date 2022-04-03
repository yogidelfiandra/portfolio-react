import React from 'react';
import { Link } from 'react-router-dom';

export default function Clients() {
  return (
    <section id='clients' className='pt-36 pb-32 bg-slate-800'>
      <div className='container'>
        <div className='w-full px-4'>
          <div className='mx-auto text-center mb-16'>
            <h3 className='font-semibold text-lg text-primary mb-2'>Clients</h3>
            <h4 className='font-bold text-white text-3xl sm:text-4xl lg:text-5xl mb-4'>
              Yang Pernah Bekerjasama
            </h4>
            <p className='font-medium text-base text-secondary md:text-lg'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
              aliquam similique ea.
            </p>
          </div>
        </div>

        <div className='w-full px-4'>
          <div className='flex flex-wrap items-center justify-center'>
            <Link
              to='#'
              className='max-w-[7.5rem] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8'
            >
              <img src='images/clients/google.svg' alt='google' />
            </Link>
            <Link
              to='#'
              className='max-w-[7.5rem] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8'
            >
              <img src='images/clients/gojek.svg' alt='gojek' />
            </Link>
            <Link
              to='#'
              className='max-w-[7.5rem] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8'
            >
              <img src='images/clients/tokopedia.svg' alt='tokopedia' />
            </Link>
            <Link
              to='#'
              className='max-w-[7.5rem] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8'
            >
              <img src='images/clients/traveloka.svg' alt='traveloka' />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
