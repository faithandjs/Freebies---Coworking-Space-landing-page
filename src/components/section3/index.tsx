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
          <div className='py-5 grid grid-cols-2 gap-y-8 gap-x-2 font-profile'>
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
            <VisionsList
              Icon={() => <img src={bullseye} alt='bullseye icon' />}
              color=' #1AC8F9'
              heading='Simple and inclusive'
              text='Coworking is an arrangement in which workers of different companies..'
            />
          </div>
        )}
      />
      <div className='relative flex lg:justify-end lg:items-start justify-center items-center max-h-[662px]'>
        <div className='h-[60%] lg:max-h-max max-h-80 w-2/3 bg-[#FFF3C8] rounded-tl-[40%] mt-10   '></div>
        <div className=' child:absolute'>
          <img
            src={one}
            alt=''
            className='left-[45%] xl:-top-5  lg:p-0 w-[56%] top-[-10%]'
          />
          <img
            src={two}
            alt=''
            className=' lg:left-56 xl:-bottom-16 left-36 xl:w-auto w-[60%] bottom-[20%]'
          />
          <img
            src={three}
            alt=''
            className='-right-36 bottom-40 2xl:block hidden'
          />
          <img src={four} alt='' className='-right-6 lg:-top-16 top-[23%]' />
        </div>
      </div>
    </section>
  );
}

