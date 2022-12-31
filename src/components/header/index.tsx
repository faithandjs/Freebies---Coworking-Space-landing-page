import React from 'react';

export default function HeaderSection() {
  return (
    <header className=' flex justify-between items-center py-10 px-52'>
      <ul className='flex w-max  child:px-3 text-grey child:whitespace-nowrap'>
        <li>HOME</li>
        <li>ABOUT</li>
        <li>SERVICES</li>
      </ul>
      <div className='text-2xl whitespace-nowrap'>1-Space</div>
      <ul className='flex w-max  child:px-3 text-grey child:whitespace-nowrap'>
        <li>SERVICES</li>
        <li>SPACES</li>
        <li>EVENTS</li>
      </ul>
    </header>
  );
}

