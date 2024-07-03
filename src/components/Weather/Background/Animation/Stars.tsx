'use client';

import { useEffect, useState } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  duration: number;
}

export default function Stars() {
  const [stars, setStars] = useState<Star[]>([]);

  const generateStarList = () => {
    const stars = [];
    const starCount = 200;

    for (let i = 0; i < starCount; i++) {
      const x = parseFloat(Math.random().toFixed(2)) * 100;
      const y = parseFloat(Math.random().toFixed(2)) * 100;
      const size = Math.floor(Math.random() * 3) + 2;
      const duration = 0.7 + Math.random() * 0.3;

      const star = {
        x,
        y,
        size,
        duration,
      };

      stars.push(star);
    }

    setStars(stars);
  };

  useEffect(() => {
    generateStarList();
  }, []);

  return (
    <div className='absolute w-full h-full overflow-hidden top-0 left-0 opacity-50 pointer-events-none'>
      {stars.map((item, index) => (
        <span
          key={index}
          className='star'
          style={{
            width: `${item.size}px`,
            height: `${item.size}px`,
            top: item.x + '%',
            left: item.y + '%',
            animationDuration: item.duration + 's',
          }}
        />
      ))}
    </div>
  );
}
