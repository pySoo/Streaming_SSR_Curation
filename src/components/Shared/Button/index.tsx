import { ButtonHTMLAttributes } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

export default function Button({
  variant = 'primary',
  size = 'medium',
  className,
  ...props
}: Props) {
  return (
    <button
      className={`flex justify-center items-center rounded-md font-medium disabled:bg-gray-300 whitespace-nowrap ${TYPE_VARIANTS[variant]} ${SIZE_VARIANTS[size]} ${className}`}
      {...props}
    />
  );
}

const TYPE_VARIANTS = {
  primary: 'bg-primary text-white',
  secondary: 'bg-transparent text-primary',
};

const SIZE_VARIANTS = {
  small: 'px-2 py-2 text-sm',
  medium: 'px-4 py-2 text-md',
  large: 'px-6 py-3 text-lg',
};
