import { ButtonHTMLAttributes } from 'react';

import { $ } from '@/utils/core';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'blue' | 'green';
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

export default function Tag({
  variant = 'blue',
  size = 'medium',
  className,
  ...props
}: Props) {
  return (
    <button
      className={$(
        `w-fit rounded-lg px-2.5 py-0.5 transition-colors cursor-pointer border-[1px] border-white/20 shadow-md ${TYPE_VARIANTS[variant]} ${SIZE_VARIANTS[size]}`,
        className,
      )}
      {...props}
    />
  );
}

const TYPE_VARIANTS = {
  blue: 'bg-blue-400 text-white',
  green: 'bg-transparent text-primary',
};

const SIZE_VARIANTS = {
  small: 'px-2 py-0.5 text-sm',
  medium: 'px-2.5 py-1 text-md',
  large: 'px-3 py-2 text-lg',
};
