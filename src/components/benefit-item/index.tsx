import React from 'react';

export default function BenefitItem({
  heading,
  Icon,
  text,
  className,
}: BenefitItemProp) {
  return (
    <div className={'text-center px-4 ' + className}>
      <div className='flex justify-center'>
        {/* <img src={icon} alt={alt} className='w-14' /> */}
        <Icon />
      </div>
      <h3 className='py-4 font-heading2 text-lg'>{heading}</h3>
      <p className='leading-[1.5] font-light'>{text}</p>
    </div>
  );
}

