import React from 'react';

export default function InputItem({ title, type, id }) {
  return (
    <div className='input-group'>
      <label htmlFor={id} className='sub-title'>
        {title}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        className='mt-2 w-full rounded-md bg-slate-100 p-3 text-dark caret-primary focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary'
        required
      />
    </div>
  );
}
