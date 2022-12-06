import React from 'react';

export default function VisionsList({
  heading,
  text,
  Icon,
  color,
}: visionsList) {
  return (
    <div className='flex items-start '>
      <div className='relative pr-4 shrink-0'>
        <Icon />
        <span
          className='block absolute w-4 h-4 rounded-full -bottom-1 -z-10'
          style={{ backgroundColor: color }}></span>
      </div>
      <div className=''>
        <h3 className='font-semibold '>{heading}</h3>
        <p className='pt-3 leading-[1.5] font-light '>{text}</p>
      </div>
    </div>
  );
}

