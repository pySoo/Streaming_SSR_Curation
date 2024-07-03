import { useEffect, useState } from 'react';

interface WindowSize {
  width: number;
  height: number;
}

export const useResize = () => {
  const isClient = typeof window === 'object';

  const getSize = () => {
    if (!isClient) return { width: 0, height: 0 };
    return { width: window.innerWidth, height: window.innerHeight };
  };

  const [windowSize, setWindowSize] = useState<WindowSize>(getSize);

  useEffect(() => {
    if (!isClient) {
      return;
    }

    const handleResize = () => {
      setWindowSize(getSize());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};
