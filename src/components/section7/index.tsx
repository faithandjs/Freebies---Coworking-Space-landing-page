import React from 'react';
import ButtonOrange from '../button';
import DetailsView from '../details-view';

export default function Section6() {
  return (
    <section className='flex child:w-[50%] pt-44'>
      <DetailsView
        orangeBtn={{ text: 'Sign Up Now', type: 'fill' }}
        subject='Become A Member'
        text='Coworking is an arrangement in which workers of different companies share an office space, allowing cost savings and convenience through the use of common infrastructures, such as equipment, utilities, and receptionist and custodial services, and in some cases refreshments and parcel acceptance services.'
        topic='Ready to try different work environment now?'
        ExtraBtn={() => <ButtonOrange text='Schedule Visit' type='outline' />}
      />
    </section>
  );
}

