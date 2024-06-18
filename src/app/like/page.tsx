'use client';

import { useState } from 'react';

import Navigation from '@/components/Navigation';
import Button from '@/components/Shared/Button';
import PageLayout from '@/components/Shared/Layout/PageLayout';
import Text from '@/components/Shared/Text';
import useLikeStore from '@/store/likeStore';

import LikeListSection from './LikeListSection';

export default function LikePage() {
  const [isEditMode, setIsEditMode] = useState(false);

  const setSelectedIds = useLikeStore((state) => state.setSelectedIds);
  const deleteSelectedItem = useLikeStore((state) => state.deleteSelectedItem);

  const toggleEditMode = () => {
    setIsEditMode(!isEditMode);
    setSelectedIds([]);
  };

  const handleDeleteItem = () => {
    deleteSelectedItem();
    setIsEditMode(false);
  };

  return (
    <PageLayout
      className='pb-[70px]'
      bottom={
        <Navigation>
          {isEditMode ? (
            <Text
              onClick={handleDeleteItem}
              className='flex items-center font-semibold cursor-pointer'
            >
              상품 삭제
            </Text>
          ) : null}
        </Navigation>
      }
    >
      <Button
        variant='secondary'
        className='w-fit px-1 font-semibold ml-auto'
        onClick={toggleEditMode}
      >
        {isEditMode ? '취소' : '편집'}
      </Button>
      <LikeListSection isEditMode={isEditMode} />
    </PageLayout>
  );
}
