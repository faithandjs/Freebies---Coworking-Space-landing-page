import React from 'react';
import womanTping from '../../assets/images/woman-typing.jpg';
import calendar from '../../assets/svgs/calendar.svg';
import bell from '../../assets/svgs/addbell.svg';
import play from '../../assets/svgs/play.svg';

import '../../styles/section2.scss';
import DetailsView from '../details-view';

export default function Section2() {
  return (
    <section className='flex items-center justify-between pt-20 child:shrink-0 child:w-[50%] '>
      <div>
        <div className='w-max'>
          <div className='relative'>
            <img src={womanTping} alt='' className='rounded-t-full' />
            <div
              className='absolute -top-3 left-[50%] h-[55%] -z-10 rounded-t-full p-[2px] pb-0 translate-x-[-50%]'
              style={{
                backgroundColor: '#fd5b2f',
                width: 'calc(100% + 20px)',
              }}>
              <div className='bg-white w-full h-full rounded-t-full '></div>
            </div>
          </div>
          <ul className='flex child:w-3 child:h-3 child:mx-1 w-max m-auto py-4 '>
            <li className='bg-orange'></li>
            <li className='bg-[#E9E9E9]'></li>
            <li className='bg-[#E9E9E9]'></li>
          </ul>
        </div>
      </div>
      <div>
        <DetailsView
          orangeBtn={{ text: 'View Availability', type: 'fill', classes: '' }}
          subject='Services'
          text='Coworking is an arrangement in which workers of different companies share an office space, allowing cost savings and convenience through the use of common infrastructures, such as equipment, utilities, and receptionist and custodial services, and in some cases refreshments and parcel acceptance services.'
          topic='Solutions designed for all your needs'
          ExtraBtn={() => (
            <button className='flex items-center'>
              <span className=' w-10 h-10 rounded-full border border-orange flex justify-center items-center'>
                <img src={play} alt='play button' />
              </span>
              <span className='text-orange pl-3'>3D Tour of Space</span>
            </button>
          )}
          // extraText={}
        />
      </div>
    </section>
  );
}

