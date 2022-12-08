import React from 'react';
import fb from '../../assets/logos/sm/fb.svg';
import lin from '../../assets/logos/sm/in.svg';
import www from '../../assets/logos/sm/www.svg';
import twt from '../../assets/logos/sm/twt.svg';

export default function FooterElement() {
  return (
    <footer className='w-full flex justify-between py-28 px-20  2xl:px-52'>
      <div className='max-w-xs'>
        <h2 className='text-2xl pb-3'>1-Space</h2>
        <p className='font-light'>
          Men cannot not live by exchanging articles, but producing them. They
          live by work not trade.
        </p>
      </div>
      <div>
        <h3 className='text-xl pb-3 text-orange'>Company</h3>
        <ul className='font-light child:py-2'>
          <li>Global Localities</li>
          <li>Missions</li>
          <li>Careers</li>
          <li>Investors</li>
          <li>Newsroom</li>
        </ul>
      </div>
      <div>
        <h3 className='text-xl pb-3 text-orange'>Partnership</h3>
        <ul className='font-light child:py-2'>
          <li>Tasks</li>
          <li>Profile</li>
          <li>Events</li>
          <li>Services</li>
        </ul>
      </div>
      <div className='follow'>
        <h3 className='text-xl pb-3 text-orange'>Follow us</h3>
        <div className='flex'>
          {[
            {
              src: fb,
              alt: 'facebook icon',
            },

            {
              src: twt,
              alt: 'twitter icon',
            },
            {
              src: www,
              alt: 'worl wide web icon',
            },
            {
              src: lin,
              alt: 'linkedin icon',
            },
          ].map((item, key) => (
            <div className='w-8 h-8 rounded-full bg-white mr-3 flex justify-center items-center'>
              <img {...{ ...item, key }} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}

