import React from 'react';
import briefcase from '../../assets/svgs/briefcase.svg';
import building from '../../assets/svgs/building.svg';
import bullseye from '../../assets/svgs/bullseye.svg';
import DetailsView from '../details-view';
import VisionsList from './component/visions-list';

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
      <div>lala</div>
    </section>
  );
}

