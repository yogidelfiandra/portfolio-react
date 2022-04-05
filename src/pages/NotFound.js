import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className='container'>
      <div
        className='flex text-center items-center justify-center'
        style={{ height: '100vh' }}
      >
        <div className='items-center'>
          <h1 className='font-semibold text-xl'>Are you lost?</h1>
          <p className='pt-4 text-secondary'>
            Some page are still in development, <br className='sm:hidden' />{' '}
            maybe you can go back if you want
          </p>
          <div className='mt-10'>
            <Link to='/' className='btn-primary'>
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
