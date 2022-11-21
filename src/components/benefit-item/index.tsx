import React from 'react';

interface BenefitItemProp {
  icon: string;
  heading: string;
  text: string;
  alt: string;
}
export default function BenefitItem({
  alt,
  heading,
  icon,
  text,
}: BenefitItemProp) {
  return (
    <div className='text-center '>
      <div className='flex justify-center'>
        <img src={icon} alt={alt} className='w-14' />
      </div>
      <h3 className='font-bold py-4'>{heading}</h3>
      <p>{text}</p>
    </div>
  );
}

