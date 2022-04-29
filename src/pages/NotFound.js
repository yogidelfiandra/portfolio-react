import React from 'react';
import { withRouter } from 'react-router-dom';

function NotFound(props) {
  return (
    <div className='container'>
      <div
        className='flex items-center justify-center text-center'
        style={{ height: '100vh' }}
      >
        <div className='items-center'>
          <h1 className='text-xl font-semibold'>Are you lost?</h1>
          <p className='pt-4 text-secondary'>
            Some page are still in development, <br className='sm:hidden' />{' '}
            maybe you can go back if you want
          </p>
          <div className='mt-10'>
            <button
              onClick={() => props.history.goBack()}
              className='btn btn-primary'
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(NotFound);
