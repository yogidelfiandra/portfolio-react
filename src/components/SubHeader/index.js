import React from 'react';

export default function SubHeader({ title, subtitle, paragraph }) {
  return (
    <div className='w-full sm:px-4'>
      <div className='mx-auto mb-16 max-w-xl text-center'>
        <h3 className='sub-title mb-2'>{title}</h3>
        <h4 className='title lg:text-4xl'>{subtitle}</h4>
        <p className='paragraph'>{paragraph}</p>
      </div>
    </div>
  );
}
