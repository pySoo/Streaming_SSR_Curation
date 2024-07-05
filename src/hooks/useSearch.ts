import { useRef } from 'react';

import { toastify } from '@/components/Shared/Toast/utils';

interface Props {
  onSubmit?: (query: string) => void;
}

export const useSearch = ({ onSubmit }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const value = inputRef.current?.value;
    if (inputRef.current === null) return;

    if (!value?.trim()) {
      toastify.warning('검색어를 입력해 주세요!');
      return;
    }

    onSubmit?.(value);
  };

  return { inputRef, handleSubmit };
};
