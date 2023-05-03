import React from 'react';

import DetailsView from '../details-view';

import one from '../../assets/images/sec4-1.jpg';
import two from '../../assets/images/sec4-2.jpg';

export default function Section4() {
  return (
    <section className='flex pt-44 lg:!pr-0  items-center justify-between '>
      <div className='w-full px-10 lg:p-0 detailView4'>
        <DetailsView
          orangeBtn={{ text: 'View Availability', type: 'fill' }}
          subject='Solutions'
          text='Coworking is an arrangement in which workers of different companies share an office space, allowing cost savings and convenience through the use of common infrastructures, such as equipment, utilities, and receptionist and custodial services, and in some cases refreshments and parcel acceptance services.'
          topic='The 1-space all view experience technology'
          className=''
        />
      </div>
      <div
        className='lg:flex xl:w-full justify-end !w-[50%] hidden '
        style={{ width: 'calc(45% +  11rem' }}>
        <img src={one} alt='' className='mr-10' />
        <img src={two} alt='' />
      </div>
    </section>
  );
}

