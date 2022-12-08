import React from 'react';

import DetailsView from '../details-view';

import one from '../../assets/images/sec4-1.jpg';
import two from '../../assets/images/sec4-2.jpg';

export default function Section4() {
  return (
    <section className='flex pt-44 !pr-0 items-center '>
      <div style={{ width: 'calc(55% -  11rem' }}>
        <DetailsView
          orangeBtn={{ text: 'View Availability', type: 'fill' }}
          subject='Solutions'
          text='Coworking is an arrangement in which workers of different companies share an office space, allowing cost savings and convenience through the use of common infrastructures, such as equipment, utilities, and receptionist and custodial services, and in some cases refreshments and parcel acceptance services.'
          topic='The 1-space all view experience technology'
          className=''
        />
      </div>
      <div
        className='flex w-full justify-end'
        style={{ width: 'calc(45% +  11rem' }}>
        <img src={one} alt='' className='mr-10' />
        <img src={two} alt='' />
      </div>
    </section>
  );
}

