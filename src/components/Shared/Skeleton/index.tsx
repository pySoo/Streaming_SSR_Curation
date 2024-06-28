import { $ } from '@/utils/core';

import Stack from '../Layout/Stack';

interface Props {
  className?: string;
}
export default function Skeleton({ className }: Props) {
  return (
    <Stack
      className={$(
        'w-[140px] h-[160px] shrink-0 bg-gray-100 rounded-lg animate-pulse',
        className,
      )}
    ></Stack>
  );
}
