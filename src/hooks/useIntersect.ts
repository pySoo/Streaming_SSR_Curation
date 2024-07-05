import { useCallback, useEffect, useRef } from 'react';

interface Props {
  onIntersect: () => void;
  options?: IntersectionObserverInit;
}

export const useIntersect = ({ onIntersect, options }: Props) => {
  const intersectRef = useRef<HTMLDivElement>(null);

  const handleIntersect = useCallback(
    (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          onIntersect();
          observer.unobserve(entry.target);
        }
      });
    },
    [onIntersect],
  );

  useEffect(() => {
    if (intersectRef.current === null) return;

    const observer = new IntersectionObserver(handleIntersect, options);

    observer.observe(intersectRef.current);

    return () => observer.disconnect();
  }, [intersectRef, onIntersect, options]);

  return intersectRef;
};
