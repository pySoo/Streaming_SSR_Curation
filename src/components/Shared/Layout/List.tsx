import { PropsWithChildren } from 'react';

import { $ } from '@/utils/core';

interface Props {
  className?: string;
  onClick?: () => void;
}

export default function List({
  className,
  onClick,
  children,
}: PropsWithChildren<Props>) {
  return (
    <ul
      className={$('flex flex-col gap-4', className)}
      onClick={onClick}
    >
      {children}
    </ul>
  );
}

interface ListRowProps {
  className?: string;
  onClick?: () => void;
}

List.Row = ({
  className,
  onClick,
  children,
}: PropsWithChildren<ListRowProps>) => {
  return (
    <li
      className={$('flex items-center', className)}
      onClick={onClick}
    >
      {children}
    </li>
  );
};
