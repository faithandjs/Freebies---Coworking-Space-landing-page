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

export default function Section1() {
  return (
    <section className='pt-20'>
      <div className='flex items-end child:w-1/2 child:relative'>
        <div className='relative'>
          <img src={squiggle} alt='orange squiggle ' />
          <h1 className='pb-16 font-extrabold text-6xl 2xl:text-7xl'>
            A new way to revolutionise your workspace to yourself
          </h1>
          <div className='glass-bar flex items-center justify-between absolute h-24 w-[125%] z-10 px-6 my-4 text-grey-light font-light'>
            <span className='flex items-center '>
              <img src={mapPin} alt='map marker ' />
              <span className='pl-3'> City</span>
            </span>
            <span>Location</span>
            <ButtonOrange text='Schedule Visit' type='fill' />
          </div>
          <div className='flex items-center flex-wrap mt-36 '>
            <div className='pfp-box flex items-center child:relative'>
              <img src={one} alt='dummy profile picture' />
              <img
                src={two}
                alt='dummy profile picture'
                className='left-[-10px]'
              />
              <img
                src={three}
                alt='dummy profile picture'
                className='left-[-20px]'
              />
              <img
                src={four}
                alt='dummy profile picture'
                className='left-[-30px]'
              />
              <img
                src={five}
                alt='dummy profile picture'
                className='left-[-40px]'
              />
              <img
                src={six}
                alt='dummy profile picture'
                className='left-[-50px]'
              />
              <span className='left-[-60px] flex items-center justify-center w-[35px] h-[35px] border-2 border-white bg-[#13ded2] rounded-full text-white text-xs '>
                +10
              </span>
            </div>
            <span className='relative -left-10'>
              16 people booked a visit in last 24 hours
            </span>
          </div>
        </div>

        <div className='flex   child:shrink-0 '>
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
              <p className=' opacity-20 font-extrabold text-5xl -rotate-90 whitespace-nowrap h-[48px] absolute bottom-[16%] right-[-34%] '>
                Co Working
              </p>
            </div>
          </div>
          <div className='child:absolute '>
            <img
              src={img1}
              alt='man sitting with a pc in a work area'
              className='left-[34%] top-[-5%]'
            />
            <img
              src={img2}
              alt='man sitting with a pc in a work area'
              className='left-[56%] top-[36%]'
            />
            <img
              src={img3}
              alt='man and woman sitting with a pc and a cup'
              className='left-[80%] top-[20%]'
            />
          </div>
        </div>
      </div>
      <div className='m-auto flex justify-between items-center max-w-[700px] py-24'>
        <img src={google} alt='google logo' />
        <img src={slack} alt='slack logo' />
        <img src={atlasian} alt='atlassian logo' />
        <img src={dropbox} alt='dropbox logo' />
        <img src={shopify} alt='shopify logo' />
      </div>
    </section>
  );
}

