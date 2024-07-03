import { useCallback, useEffect, useRef } from 'react';

export const useThrottle = () => {
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const cancelTimer = useCallback(() => {
    if (timeout.current) {
      clearTimeout(timeout.current);
      timeout.current = null;
    }
  }, []);

  useEffect(() => cancelTimer, [cancelTimer]);

  return <T extends (...args: unknown[]) => void>(callback: T, delay: number) =>
    (...args: Parameters<T>) => {
      if (!timeout.current) {
        const timeoutCallback = () => {
          callback(...args);
          timeout.current = null;
        };

        timeout.current = setTimeout(timeoutCallback, delay);
      }
    };
};
