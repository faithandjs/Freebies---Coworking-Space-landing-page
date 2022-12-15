import React from 'react';

import one from '../../assets/images/sec6-1.jpg';
import two from '../../assets/images/sec6-2.jpg';
import three from '../../assets/images/sec6-3.jpg';
import four from '../../assets/images/sec6-4.jpg';
import five from '../../assets/images/sec6-5.jpg';

export default function Section7() {
  return (
    <section className='flex  pt-44 justify-between items-stretch '>
      <div style={{ width: 'calc(55% - 10px)' }} className='shrink-0'>
        <h4 className='text-orange uppercase tracking-widest font-heading2'>
          Gallery
        </h4>
        <h2 className='text-6xl font-heading py-5'>
          Immersive beautiful co-working space gallery
        </h2>
        <div className='h-3/4 pt-4'>
          <div className='flex justify-between'>
            <img src={two} alt='' style={{ width: 'calc(37% - 10px)' }} />
            <img src={three} alt='' style={{ width: 'calc(63% - 10px)' }} />
          </div>
          <div className='flex justify-between pt-5'>
            <img src={four} alt='' style={{ width: 'calc(63% - 10px)' }} />
            <img src={five} alt='' style={{ width: 'calc(37% - 10px)' }} />
          </div>
        </div>{' '}
      </div>
      <div style={{ width: 'calc(45% - 10px)' }}>
        <img src={one} alt='' className='h-full' />
      </div>
    </section>
  );
}

