import { PropsWithChildren, ReactNode } from 'react';

import { $ } from '@/utils/core';

interface Props extends PropsWithChildren {
  header?: ReactNode;
  bottom?: ReactNode;
  className?: string;
}

export default function PageLayout({
  header,
  bottom,
  className,
  children,
}: Props) {
  return (
    <div
      className={$(
        'w-full min-h-screen max-w-[600px] mx-auto px-5 tracking-tight',
        className,
      )}
    >
      {header && header}
      {children}
      {bottom && bottom}
    </div>
  );
}
