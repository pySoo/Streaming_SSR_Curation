'use client';

import { useSearch } from '@/hooks/useSearch';
import { $ } from '@/utils/core';

import { TextField } from '../TextField';

interface Props {
  className?: string;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  onSubmit: (query: string) => void;
}

export default function SearchBar({ className, inputProps, onSubmit }: Props) {
  const { inputRef, handleSubmit, setSearchParams } = useSearch({ onSubmit });

  return (
    <form
      className={$('w-full', className)}
      onSubmit={handleSubmit}
    >
      <TextField.Input
        ref={inputRef}
        onChange={setSearchParams}
        {...inputProps}
      />
    </form>
  );
}
