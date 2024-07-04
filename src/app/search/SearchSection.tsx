'use client';

import { useState } from 'react';

import AsyncBoundary from '@/components/Shared/AsyncBoundary';
import Stack from '@/components/Shared/Layout/Stack';
import SearchBar from '@/components/Shared/SearchBar';
import Spacing from '@/components/Shared/Spacing';
import Text from '@/components/Shared/Text';
import ProductListSkeleton from '@/components/Shopping/ProductListSkeleton';
import ShoppingListSection from '@/components/Shopping/ShoppingListSection';

export default function SearchSection() {
  const [query, setQuery] = useState('');

  const handleSubmit = (query: string) => {
    setQuery(query);
  };

  return (
    <section>
      <Stack className='h-full'>
        <Spacing size={20} />
        <Stack>
          <SearchBar onSubmit={handleSubmit} />
          <Spacing size={10} />
          {query && (
            <Text
              variant='subtitle'
              className='text-left'
            >
              {query} 검색 결과
            </Text>
          )}
        </Stack>
        <Spacing size={10} />
        <Stack className='w-full'>
          {query && (
            <AsyncBoundary
              suspenseFallback={<ProductListSkeleton variant='shopping' />}
            >
              <ShoppingListSection query={query} />
            </AsyncBoundary>
          )}
          {!query && (
            <Text className='text-center'>원하는 상품을 검색해 보세요 🔍</Text>
          )}
        </Stack>
      </Stack>
    </section>
  );
}
