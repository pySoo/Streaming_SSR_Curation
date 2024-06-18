'use client';

import { useState } from 'react';

import Button from '@/components/Shared/Button';
import List from '@/components/Shared/Layout/List';
import Stack from '@/components/Shared/Layout/Stack';
import Text from '@/components/Shared/Text';
import ProductCard from '@/components/Shopping/ProductCard';
import ProductCheckBox from '@/components/Shopping/ProductCheckBox';
import useLikeStore from '@/store/likeStore';

import { ProductId } from '../api/types';

interface Props {
  isEditMode: boolean;
}

export default function LikeListSection() {
  const [isEditMode, setIsEditMode] = useState(false);

  const likeList = useLikeStore((state) => state.likeList);

  const selectedIds = useLikeStore((state) => state.selectedIds);
  const setSelectedIds = useLikeStore((state) => state.setSelectedIds);
  const deleteSelectedItem = useLikeStore((state) => state.deleteSelectedItem);

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
    <section>
      <Stack>
        <Button
          variant='secondary'
          className='w-fit px-1 font-semibold ml-auto'
          onClick={toggleEditMode}
        >
          {isEditMode ? '취소' : '편집'}
        </Button>
        <List className='grid grid-cols-2'>
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
      </Stack>
      {isEditMode ? (
        <Text
          onClick={handleDeleteItem}
          className='flex items-center font-semibold cursor-pointer'
        >
          상품 삭제
        </Text>
      ) : null}
    </section>
  );
}
