import React from 'react';
import calenderStar from '../../assets/svgs/section5/calenderStar.svg';
import weight from '../../assets/svgs/section5/weight.svg';
import wifi from '../../assets/svgs/section5/wifi.svg';
import globe from '../../assets/svgs/section5/globe.svg';
import sofa from '../../assets/svgs/section5/sofa.svg';
import BenefitItem from '../benefit-item';

export default function Section5() {
  return (
    <section className='text-center pt-32'>
      <h4 className='text-orange uppercase font-bold tracking-widest'>
        Why Choose Us?
      </h4>
      <div className='max-w-[600px] m-auto py-6'>
        <h2 className='text-6xl '>The benefits that will make you comfort</h2>
      </div>
      <div className='flex justify-between py-7'>
        {[
          {
            heading: 'Community Events',
            Icon: () => <img src={calenderStar} alt='calender with star' />,
            text: 'Allowing cost savings and convenience through the use of common infrastructures.',
          },
          {
            heading: 'Exercise Facilities',
            Icon: () => <img src={weight} alt='weight icon' />,
            text: 'Allowing cost savings and convenience through the use of common infrastructures.',
          },
          {
            heading: 'High-Speed Wireless',
            Icon: () => <img src={wifi} alt='wifi icon' />,
            text: 'Allowing cost savings and convenience through the use of common infrastructures.',
          },
          {
            heading: 'Global Availability',
            Icon: () => <img src={globe} alt='globe image' />,
            text: 'Allowing cost savings and convenience through the use of common infrastructures.',
          },
          {
            heading: 'Comfort Lounges',
            Icon: () => <img src={sofa} alt='sofa image' />,
            text: 'Allowing cost savings and convenience through the use of common infrastructures.',
          },
        ].map((item, key) => (
          <BenefitItem {...{ ...item, key }} />
        ))}
      </div>
    </section>
  );
}

