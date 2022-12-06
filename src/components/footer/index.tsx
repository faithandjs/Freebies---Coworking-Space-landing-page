import React from 'react';
import fb from '../../assets/logos/sm/fb.svg';
import lin from '../../assets/logos/sm/in.svg';
import www from '../../assets/logos/sm/www.svg';
import twt from '../../assets/logos/sm/twt.svg';

export default function FooterElement() {
  return (
    <footer>
      <div className='text'>
        <h2>1-Space</h2>
        <p>
          Men cannot not live by exchanging articles, but producing them. They
          live by work not trade.
        </p>
      </div>
      <div>
        <h3>Company</h3>
        <ul>
          <li>Global Localities</li>
          <li>Missions</li>
          <li>Careers</li>
          <li>Investors</li>
          <li>Newsroom</li>
        </ul>
      </div>
      <div>
        <h3>Partnership</h3>
        <ul>
          <li>Tasks</li>
          <li>Profile</li>
          <li>Events</li>
          <li>Services</li>
        </ul>
      </div>
      <div className='follow'>
        <h3>Follow us</h3>
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

