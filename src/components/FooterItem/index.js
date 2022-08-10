import React from 'react';

export default function FooterItem({ href, title }) {
  return (
    <li>
      <a href={href} className='mb-3 inline-block text-base hover:text-primary'>
        {title}
      </a>
    </li>
  );
}
