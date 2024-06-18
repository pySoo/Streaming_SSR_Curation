import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useRef } from 'react';

interface Props {
  queryName?: string;
  onSubmit?: (query: string) => void;
}

export const useSearch = ({ queryName, onSubmit }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const query = queryName ?? 'q';

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const value = inputRef.current?.value;
    if (inputRef.current === null) return;
    if (!value?.trim()) return;

    onSubmit?.(value);

    inputRef.current.value = '';
  };

  const setSearchParams = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    const encodedQuery = encodeURIComponent(value);

    const params = new URLSearchParams(searchParams);

    if (value) {
      params.set(query, encodedQuery);
      replace(`${pathname}?${query}=${encodedQuery}`);
    } else {
      params.delete(query);
      replace(`${pathname}`);
    }
  };

  return { inputRef, handleSubmit, setSearchParams };
};
