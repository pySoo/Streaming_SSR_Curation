'use client';

import List from '@/components/Shared/Layout/List';
import Stack from '@/components/Shared/Layout/Stack';
import ProductCard from '@/components/Shopping/ProductCard';
import ProductCheckBox from '@/components/Shopping/ProductCheckBox';
import useLikeStore from '@/store/likeStore';

import { ProductId } from '../api/types';

interface Props {
  isEditMode: boolean;
}

export default function LikeListSection({ isEditMode }: Props) {
  const likeList = useLikeStore((state) => state.likeList);

  const selectedIds = useLikeStore((state) => state.selectedIds);
  const setSelectedIds = useLikeStore((state) => state.setSelectedIds);

  const handleSelectCheckBox = (id: ProductId, isSelected: boolean) => {
    const filteredIds = isSelected
      ? [...selectedIds, id]
      : selectedIds.filter((selectedId) => selectedId !== id);

    setSelectedIds(filteredIds);
  };

  return (
    <section>
      <Stack>
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
    </section>
  );
}
