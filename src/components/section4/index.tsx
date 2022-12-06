import React from 'react';
import DetailsView from '../details-view';

export default function Section4() {
  return (
    <section className='flex child:w-[50%] pt-44'>
      <DetailsView
        orangeBtn={{ text: 'View Availability', type: 'fill' }}
        subject='Solutions'
        text='Coworking is an arrangement in which workers of different companies share an office space, allowing cost savings and convenience through the use of common infrastructures, such as equipment, utilities, and receptionist and custodial services, and in some cases refreshments and parcel acceptance services.'
        topic='The 1-space all view experience technology'
      />
    </section>
  );
}

