import React from 'react';

import ButtonOrange from '../button';
import DetailsView from '../details-view';

import one from '../../assets/images/sec7-1.jpg';

export default function Section6() {
  return (
    <section className='flex pt-48 pb-14'>
      <DetailsView
        orangeBtn={{ text: 'Sign Up Now', type: 'fill' }}
        subject='Become A Member'
        text='Coworking is an arrangement in which workers of different companies share an office space, allowing cost savings and convenience through the use of common infrastructures, such as equipment, utilities, and receptionist and custodial services, and in some cases refreshments and parcel acceptance services.'
        topic='Ready to try different work environment now?'
        ExtraBtn={() => <ButtonOrange text='Schedule Visit' type='outline' />}
        className='w-[55%]'
      />
      <div className='flex justify-center w-[45%]'>
        <div className='relative w-max'>
          <img src={one} alt='' className='rounded-t-full' />
          <div
            className='absolute  -top-5 -left-5 w-full h-full -z-10 rounded-t-full p-[2px] pb-0 bg-orange '
            style={{
              height: 'calc(100% + 20px)',
            }}>
            <div className='bg-white w-full h-full rounded-t-full '></div>
          </div>
        </div>
      </div>
    </section>
  );
}

