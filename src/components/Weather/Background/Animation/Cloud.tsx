'use client';

import Image from 'next/image';
import React from 'react';

interface CloudProps {
  cloudCover?: number;
}

export default function Cloud({ cloudCover }: CloudProps) {
  return (
    <div className='absolute w-full h-full overflow-hidden pointer-events-none'>
      {[...Array(4)].map((_, index) => (
        <Image
          key={index}
          src={`/images/cloud${index + 1}.png`}
          alt={`cloud${index + 1}`}
          className='cloud'
          width={200}
          height={200}
          style={
            {
              '--i': index + 1,
              opacity: `0.${cloudCover}`,
            } as React.CSSProperties & {
              '--i': number;
            }
          }
        />
      ))}
    </div>
  );
}
