'use client';

import useGetShoppingList from '@/hooks/apis/getShoppingList';
import { useIntersect } from '@/hooks/useIntersect';

import List from '../Shared/Layout/List';
import Stack from '../Shared/Layout/Stack';
import Spinner from '../Shared/Spinner';
import ProductCard from './ProductCard';
import ProductLikeButton from './ProductLikeButton';

export default function ShoppingListSection() {
  const { data, isFetching, hasNextPage, fetchNextPage } = useGetShoppingList();

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
  return (
    <section className='pt-16'>
      <List className='grid grid-cols-2'>
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
      {isFetching && (
        <Stack className='relative'>
          <Spinner />
        </Stack>
      )}
    </section>
  );
}
