'use client';

import { useState } from 'react';

import Navigation from '@/components/Navigation';
import Button from '@/components/Shared/Button';
import PageLayout from '@/components/Shared/Layout/PageLayout';
import Stack from '@/components/Shared/Layout/Stack';
import SearchBar from '@/components/Shared/SearchBar';
import Text from '@/components/Shared/Text';
import ShoppingListSection from '@/components/Shopping/ShoppingListSection';

interface Props {
  searchParams?: {
    q?: string;
  };
}

export default function SearchPage({ searchParams }: Props) {
  const [query, setQuery] = useState(searchParams?.q ?? '');

  const handleSubmit = (query: string) => {
    setQuery(query);
  };

  return (
    <PageLayout
      className='pb-[70px]'
      bottom={<Navigation />}
    >
      <Stack className='h-full'>
        <Stack.Row className='w-full gap-2'>
          <SearchBar onSubmit={handleSubmit} />
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
    </PageLayout>
  );
}
