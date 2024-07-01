import { PropsWithChildren, ReactNode } from 'react';

import { $ } from '@/utils/core';

interface Props extends PropsWithChildren {
  header?: ReactNode;
  bottom?: ReactNode;
  background?: ReactNode;
  className?: string;
}

export default function PageLayout({
  header,
  bottom,
  background,
  className,
  children,
}: Props) {
  return (
    <div
      className={$(
        'relative w-full h-full min-h-screen tracking-tight',
        className,
      )}
    >
      {header && header}
      <div className='max-w-tablet mx-auto px-5 relative z-contents'>
        {children}
      </div>
      {bottom && bottom}
      {background && background}
    </div>
  );
}
