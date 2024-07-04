'use client';

import { useGetShoppingList } from '@/hooks/apis/getShoppingList';
import { useIntersect } from '@/hooks/useIntersect';

import List from '../Shared/Layout/List';
import Text from '../Shared/Text';
import ProductCard from './ProductCard';
import ProductLikeButton from './ProductLikeButton';
import ProductListSkeleton from './ProductListSkeleton';

interface Props {
  query?: string;
}

export default function ShoppingListSection({ query }: Props) {
  const { data, isFetching, hasNextPage, fetchNextPage } = useGetShoppingList({
    query,
  });

  const handleIntersect = () => {
    if (isFetching || !hasNextPage) return;
    fetchNextPage();
  };

  const intersectRef = useIntersect({
    onIntersect: handleIntersect,
    options: { rootMargin: '0px 0px 400px 0px' },
  });

  if (data == null) return null;

  const { pages: shoppingList } = data;

  if (shoppingList.length === 0) {
    return <Text className='text-center'>검색 결과가 없습니다.</Text>;
  }

  return (
    <section className='pb-navigation'>
      <List className='grid grid-item grid-cols-2'>
        {shoppingList.map((product, index) => (
          <List.Row
            key={product.productId + index}
            className='items-start'
          >
            <ProductCard
              product={product}
              right={<ProductLikeButton product={product} />}
            />
          </List.Row>
        ))}
      </List>
      {shoppingList && <div ref={intersectRef} />}
      {isFetching && <ProductListSkeleton variant='shopping' />}
    </section>
  );
}
