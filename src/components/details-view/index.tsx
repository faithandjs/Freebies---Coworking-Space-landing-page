import React from 'react';
import ButtonOrange from '../button';

export default function DetailsView({
  subject,
  topic,
  text,
  orangeBtn,
  ExtraBtn = false,
  ExtraText = false,
  className = '',
}: detailsView) {
  return (
    <div className={'w-full ' + className}>
      <h4 className='text-orange uppercase tracking-widest font-heading2 '>
        {subject}
      </h4>
      <h2 className='text-6xl py-4 font-heading'>{topic}</h2>
      <p className='leading-[2.5] py-8  font-profile'>{text}</p>
      {ExtraText && <ExtraText />}
      <div className={`pt-7 pb-4 ${ExtraBtn ? 'flex child:mr-9 ' : ''}`}>
        <ButtonOrange {...orangeBtn} />
        {ExtraBtn && <ExtraBtn />}
      </div>
    </div>
  );
}

