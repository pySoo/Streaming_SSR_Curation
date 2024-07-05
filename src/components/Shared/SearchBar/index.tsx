'use client';

import { useSearch } from '@/hooks/useSearch';
import { $ } from '@/utils/core';

import Button from '../Button';
import { TextField } from '../TextField';

interface Props {
  className?: string;
  onSubmit: (query: string) => void;
}

export default function SearchBar({ className, onSubmit }: Props) {
  const { inputRef, handleSubmit } = useSearch({ onSubmit });

  return (
    <form
      className={$('flex w-full gap-2', className)}
      onSubmit={handleSubmit}
    >
      <TextField.Input ref={inputRef} />
      <Button>검색</Button>
    </form>
  );
}
