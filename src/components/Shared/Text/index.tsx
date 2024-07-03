import { AllHTMLAttributes, ReactNode } from 'react';

import { $ } from '@/utils/core';

type Props = {
  as?: keyof JSX.IntrinsicElements;
  variant?: 'title' | 'subtitle' | 'body' | 'caption';
  children: ReactNode;
  className?: string;
} & Omit<AllHTMLAttributes<Element>, 'as' | 'type'>;

export default function Text({
  as: Component = 'p',
  variant = 'body',
  children,
  className,
  ...props
}: Props) {
  return (
    <Component
      className={$(`${TEXT_VARIANT[variant]}`, className)}
      {...props}
    >
      {children}
    </Component>
  );
}

const TEXT_VARIANT = {
  title: 'text-2xl font-semibold mb-3 text-white shadow-text',
  subtitle: 'text-lg font-semibold mb-2 text-white',
  body: 'text-md font-normal text-white',
  caption: 'text-sm text-[#eee]',
};
