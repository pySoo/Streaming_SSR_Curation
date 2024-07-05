import { useEffect, useState } from 'react';

import { useThrottle } from './useThrottle';

interface WindowSize {
  width: number;
  height: number;
}

export const useResize = () => {
  const isClient = typeof window === 'object';
  const throttle = useThrottle();

  const getSize = () => {
    if (!isClient) return { width: 0, height: 0 };
    return { width: window.innerWidth, height: window.innerHeight };
  };

  const [windowSize, setWindowSize] = useState<WindowSize>(getSize);

  useEffect(() => {
    if (!isClient) {
      return;
    }

    const handleResize = throttle(() => {
      setWindowSize(getSize());
    }, 300);

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};
