import React from 'react';

import DetailsView from '../details-view';
import VisionsList from './component/visions-list';

import briefcase from '../../assets/svgs/briefcase.svg';
import building from '../../assets/svgs/building.svg';
import bullseye from '../../assets/svgs/bullseye.svg';
import one from '../../assets/images/sec3-1.png';
import two from '../../assets/images/sec3-2.png';
import three from '../../assets/images/sec3-3.png';
import four from '../../assets/images/sec3-4.png';

export default function Section3() {
  return (
    <section className='flex child:w-[50%] pt-44'>
      <DetailsView
        orangeBtn={{ text: 'Explore More', type: 'fill' }}
        subject='Visions'
        text='Coworking is an arrangement in which workers of different companies share an office space, allowing cost savings and convenience through the use of common infrastructures services.'
        topic='Our vision in 1-space to make something'
        ExtraText={() => (
          <div className='py-5'>
            <div className='flex child:w-[48%] justify-between'>
              <VisionsList
                Icon={() => <img src={building} alt='building icon' />}
                color=' #FCD25F'
                heading='High quality co-living spaces'
                text='Coworking is an arrangement in which workers of different companies.'
              />
              <VisionsList
                Icon={() => <img src={briefcase} alt='briefcase icon' />}
                color=' #13DED2'
                heading='Equipped for productivity'
                text='Coworking is an arrangement in which workers of different companies.'
              />
            </div>
            <div className='flex child:w-[48%] justify-between pt-10'>
              <VisionsList
                Icon={() => <img src={bullseye} alt='bullseye icon' />}
                color=' #1AC8F9'
                heading='Simple and inclusive'
                text='Coworking is an arrangement in which workers of different companies..'
              />
            </div>
          </div>
        )}
      />
      <div className='relative flex justify-end max-h-[662px]'>
        <div className='h-[60%] w-2/3 bg-[#FFF3C8] rounded-tl-[40%] mt-10   '></div>
        <div className=' child:absolute'>
          <img src={one} alt='' className='left-[45%] -top-5' />
          <img src={two} alt='' className='left-56 -bottom-16' />
          <img src={three} alt='' className='-right-36 bottom-40' />
          <img src={four} alt='' className='-right-6 -top-16' />
        </div>
      </div>
    </section>
  );
}

