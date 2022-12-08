import React from 'react';

export default function BenefitItem({ heading, Icon, text }: BenefitItemProp) {
  return (
    <div className='text-center px-4'>
      <div className='flex justify-center'>
        {/* <img src={icon} alt={alt} className='w-14' /> */}
        <Icon />
      </div>
      <h3 className='font-bold py-4'>{heading}</h3>
      <p className='leading-[1.5] font-light'>{text}</p>
    </div>
  );
}

