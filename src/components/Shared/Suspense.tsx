'use client';

import {
  ComponentProps,
  Suspense as ReactSuspense,
  useEffect,
  useState,
} from 'react';

export function Suspense({
  fallback,
  children,
}: ComponentProps<typeof ReactSuspense>) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (mounted) {
    return <ReactSuspense fallback={fallback}>{children}</ReactSuspense>;
  }
  return <>{fallback}</>;
}
