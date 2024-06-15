'use client';

import { ComponentType, PropsWithChildren, ReactNode } from 'react';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';

import ErrorFallback from './ErrorFallback';
import Spinner from './Spinner';
import { Suspense } from './Suspense';

interface Props {
  errorFallback?: ComponentType<FallbackProps>;
  suspenseFallback?: ReactNode;
}

export default function AsyncBoundary({
  errorFallback,
  suspenseFallback,
  children,
}: PropsWithChildren<Props>) {
  return (
    <ErrorBoundary FallbackComponent={errorFallback ?? ErrorFallback}>
      <Suspense fallback={suspenseFallback ?? <Spinner />}>{children}</Suspense>
    </ErrorBoundary>
  );
}
