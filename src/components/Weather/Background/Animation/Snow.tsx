'use client';

import React, { useEffect, useState } from 'react';

interface SnowDrops {
  left: number;
  duration: number;
  delay: number;
}

export default function Snow() {
  const [snowList, setSnowList] = useState<SnowDrops[]>([]);

  const generateSnowList = () => {
    const newSnowList = [];

    for (let i = 0; i < 100; i++) {
      const left = Math.floor(Math.random() * window.innerWidth);
      const duration = 3 + Math.random() * 0.3;
      const delay = Math.random() * 5;

      const snowdrop = {
        left,
        duration,
        delay,
      };
      newSnowList.push(snowdrop);
    }
    setSnowList(newSnowList);
  };

  useEffect(() => {
    generateSnowList();
  }, []);

  return (
    <div className='absolute w-full h-full overflow-hidden top-0 opacity-50 pointer-events-none'>
      {snowList.map((item, index) => (
        <span
          key={index}
          className='snowdrop'
          style={{
            left: item.left + 'px',
            animationDelay: item.delay + 's',
            animationDuration: item.duration + 's',
          }}
        ></span>
      ))}
    </div>
  );
}
