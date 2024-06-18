'use client';

import { useSearchParams } from 'next/navigation';
import { useState } from 'react';

import Button from '@/components/Shared/Button';
import Stack from '@/components/Shared/Layout/Stack';
import SearchBar from '@/components/Shared/SearchBar';
import Text from '@/components/Shared/Text';
import ShoppingListSection from '@/components/Shopping/ShoppingListSection';

export default function SearchSection() {
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('q') ?? '');

  const handleSubmit = (query: string) => {
    setQuery(query);
  };

  return (
    <section>
      <Stack className='h-full'>
        <Stack.Row className='w-full gap-2'>
          <SearchBar
            inputProps={{ value: query }}
            onSubmit={handleSubmit}
          />
          <Button>검색</Button>
        </Stack.Row>
        <Stack className='flex justify-center items-center mt-2'>
          {query ? (
            <ShoppingListSection query={query} />
          ) : (
            <Text variant='caption'>원하는 상품을 검색해 보세요!</Text>
          )}
        </Stack>
      </Stack>
    </section>
  );
}
