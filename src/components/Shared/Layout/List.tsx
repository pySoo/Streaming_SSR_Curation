import { ComponentProps, PropsWithChildren } from 'react';

import { $ } from '@/utils/core';

interface Props extends ComponentProps<'ul'> {
  className?: string;
  onClick?: () => void;
}

export default function List({
  className,
  onClick,
  children,
  ...props
}: PropsWithChildren<Props>) {
  return (
    <ul
      className={$('flex flex-col gap-4', className)}
      onClick={onClick}
      {...props}
    >
      {children}
    </ul>
  );
}

interface ListRowProps extends ComponentProps<'li'> {
  className?: string;
  onClick?: () => void;
}

List.Row = ({
  className,
  onClick,
  children,
  ...props
}: PropsWithChildren<ListRowProps>) => {
  return (
    <li
      className={$('flex items-center', className)}
      onClick={onClick}
      {...props}
    >
      {children}
    </li>
  );
};
