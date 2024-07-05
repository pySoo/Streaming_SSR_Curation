import { ComponentProps, PropsWithChildren } from 'react';

import { $ } from '@/utils/core';

interface Props extends ComponentProps<'div'> {
  className?: string;
}

export default function Stack({
  className,
  children,
  ...props
}: PropsWithChildren<Props>) {
  return (
    <div
      className={$('flex flex-col', className)}
      {...props}
    >
      {children}
    </div>
  );
}

interface StackRowProps extends ComponentProps<'div'> {
  className?: string;
}

Stack.Row = ({
  className,
  children,
  ...props
}: PropsWithChildren<StackRowProps>) => {
  return (
    <div
      className={$('flex items-center', className)}
      {...props}
    >
      {children}
    </div>
  );
};
