import { PropsWithChildren } from 'react';

import { $ } from '@/utils/core';

interface Props {
  className?: string;
}

export default function Stack({
  className,
  children,
}: PropsWithChildren<Props>) {
  return <div className={$('flex flex-col', className)}>{children}</div>;
}

interface StackRowProps {
  className?: string;
}

Stack.Row = ({ className, children }: PropsWithChildren<StackRowProps>) => {
  return <div className={$('flex items-center', className)}>{children}</div>;
};
