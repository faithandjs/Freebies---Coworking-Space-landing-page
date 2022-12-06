import React from 'react';

import ButtonOrange from '../button';

import squiggle from '../../assets/svgs/squiggle.svg';
import main from '../../assets/images/image 50.png';
import one from '../../assets/images/pfp/one.png';
import two from '../../assets/images/pfp/two.png';
import three from '../../assets/images/pfp/three.png';
import four from '../../assets/images/pfp/four.png';
import five from '../../assets/images/pfp/five.png';
import six from '../../assets/images/pfp/six.png';
import mapPin from '../../assets/svgs/map-pin.svg';
import img1 from '../../assets/images/img1.png';
import img2 from '../../assets/images/img2.png';
import img3 from '../../assets/images/img3.png';
import google from '../../assets/logos/google.svg';
import slack from '../../assets/logos/slack.svg';
import atlasian from '../../assets/logos/atlassian.svg';
import dropbox from '../../assets/logos/dropbox.svg';
import shopify from '../../assets/logos/shopify.svg';

import '../../styles/section1.scss';

export default function Section1() {
  return (
    <section className='section-one'>
      <div className='details'>
        <div className='text-dets'>
          <img src={squiggle} alt='orange squiggle ' />
          <h1 className='pb-16'>
            A new way to revolutionise your workspace to yourself
          </h1>
          <div className='glass-bar'>
            <span>
              <img src={mapPin} alt='map marker ' />
              <span> City</span>
            </span>
            <span>Location</span>
            <ButtonOrange text='Schedule Visit' type='fill' />
          </div>
          <div className='profile-dets'>
            <div className='pfp-box'>
              <img src={one} alt='dummy profile picture' />
              <img src={two} alt='dummy profile picture' />
              <img src={three} alt='dummy profile picture' />
              <img src={four} alt='dummy profile picture' />
              <img src={five} alt='dummy profile picture' />
              <img src={six} alt='dummy profile picture' />
              <span className=' '>+10</span>
            </div>
            <span className='text'>
              16 people booked a visit in last 24 hours
            </span>
          </div>
        </div>

        <div className='image-dets   child:shrink-0 '>
          <div className='flex'>
            <div className='relative'>
              <img src={main} alt='' className='rounded-t-full' />
              <div
                className='absolute  -top-4 -left-4 w-full h-full -z-10 rounded-t-full p-[2px] pb-0'
                style={{
                  backgroundImage:
                    'linear-gradient(45deg, #3B90FB 0%, #A7327A 100%)',
                  height: 'calc(100% + 16px)',
                }}>
                <div className='bg-white w-full h-full rounded-t-full '></div>
              </div>
              <p className='co-working'>Co Working</p>
            </div>
          </div>
          <div className='imgs '>
            <img src={img1} alt='man sitting with a pc in a work area' />
            <img src={img2} alt='man sitting with a pc in a work area' />
            <img src={img3} alt='man and woman sitting with a pc and a cup' />
          </div>
        </div>
      </div>
      <div className='logos'>
        <img src={google} alt='google logo' />
        <img src={slack} alt='slack logo' />
        <img src={atlasian} alt='atlassian logo' />
        <img src={dropbox} alt='dropbox logo' />
        <img src={shopify} alt='shopify logo' />
      </div>
    </section>
  );
}

