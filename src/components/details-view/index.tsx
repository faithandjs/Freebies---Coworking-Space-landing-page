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
      <h4 className='text-orange uppercase font-bold tracking-widest'>
        {subject}
      </h4>
      <h2 className='text-6xl font-semibold py-4'>{topic}</h2>
      <p className='leading-[2.5] py-8'>{text}</p>
      {ExtraText && <ExtraText />}
      <div className={`pt-7 pb-4 ${ExtraBtn ? 'flex child:mr-9 ' : ''}`}>
        <ButtonOrange {...orangeBtn} />
        {ExtraBtn && <ExtraBtn />}
      </div>
    </div>
  );
}

