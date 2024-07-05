'use client';

import { useState } from 'react';

import AsyncBoundary from '@/components/Shared/AsyncBoundary';
import Button from '@/components/Shared/Button';
import List from '@/components/Shared/Layout/List';
import Stack from '@/components/Shared/Layout/Stack';
import ProductCard from '@/components/Shopping/ProductCard';
import ProductCheckBox from '@/components/Shopping/ProductCheckBox';
import ProductListSkeleton from '@/components/Shopping/ProductListSkeleton';
import useLikeStore from '@/store/likeStore';

import { ProductId } from '../api/types';

export default function LikeEditSection() {
  const [isEditMode, setIsEditMode] = useState(false);

  const { likeList, selectedIds, setSelectedIds, deleteSelectedItem } =
    useLikeStore((state) => state);

  const toggleEditMode = () => {
    setIsEditMode(!isEditMode);
    setSelectedIds([]);
  };

  const handleSelectCheckBox = (id: ProductId, isSelected: boolean) => {
    const filteredIds = isSelected
      ? [...selectedIds, id]
      : selectedIds.filter((selectedId) => selectedId !== id);

    setSelectedIds(filteredIds);
  };

  const handleDeleteItem = () => {
    deleteSelectedItem();
    setIsEditMode(false);
  };

  return (
    <Stack className='pb-navigation'>
      <Stack>
        <Button
          variant='secondary'
          className='w-fit px-1 font-semibold ml-auto text-highlight'
          onClick={toggleEditMode}
        >
          {isEditMode ? '취소' : '편집'}
        </Button>
        <AsyncBoundary
          suspenseFallback={<ProductListSkeleton variant='shopping' />}
        >
          <List className='grid grid-item grid-cols-2'>
            {likeList.map((product, index) => (
              <List.Row
                key={product.productId + index}
                className='items-start'
              >
                <ProductCard
                  product={product}
                  right={
                    isEditMode ? (
                      <ProductCheckBox
                        id={product.productId}
                        value={selectedIds.includes(product.productId)}
                        onSelect={handleSelectCheckBox}
                      />
                    ) : null
                  }
                />
              </List.Row>
            ))}
          </List>
        </AsyncBoundary>
      </Stack>
      {isEditMode ? (
        <Button
          onClick={handleDeleteItem}
          className='fixed left-[50%] bottom-[70px] translate-x-[-50%] bg-white text-highlight font-semibold rounded-lg shadow-lg'
        >
          상품 삭제
        </Button>
      ) : null}
    </Stack>
  );
}
