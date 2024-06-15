import type { ClassValue } from 'clsx';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const $ = (...className: ClassValue[]) => {
  return twMerge(clsx(className));
};
