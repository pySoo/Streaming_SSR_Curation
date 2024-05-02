import { PropsWithChildren, ReactNode } from 'react';

import Header from '../Header';

interface Props extends PropsWithChildren {
  header?: ReactNode;
  hasCTAButton?: boolean;
}

export default function PageLayout({ header, hasCTAButton, children }: Props) {
  return (
    <div
      className={`w-full h-screen max-w-[425px] mx-auto px-5 tracking-tight ${header ? 'pt-[60px]' : ''} ${hasCTAButton ? 'pb-[100px]' : ''}`}
    >
      {header && <Header>{header}</Header>}
      {children}
    </div>
  );
}
