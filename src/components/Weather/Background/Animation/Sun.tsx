'use client';

import Image from 'next/image';
import React from 'react';

interface SunProps {
  UVindex: number;
}

export default function Sun({ UVindex }: SunProps) {
  return (
    <div className='absolute w-full h-full overflow-hidden top-0 opacity-50  pointer-events-none'>
      <Image
        src='/images/sunlight.png'
        alt='sunlight'
        className='absolute w-full h-[30%] opacity-100 scale-x-[-1]'
        width={200}
        height={200}
        style={{ opacity: `0.${UVindex}` }}
      />
    </div>
  );
}
