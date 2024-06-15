'use client';

import Image from 'next/image';
import Link from 'next/link';

import { PATH } from '@/constants/path';
import useGetShoppingList from '@/hooks/apis/getShoppingList';
import { useIntersect } from '@/hooks/useIntersect';
import { removeMarkdownBoldTag } from '@/utils/regex';

import List from '../Shared/Layout/List';
import Stack from '../Shared/Layout/Stack';
import Spinner from '../Shared/Spinner';
import Text from '../Shared/Text';

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
      <List>
        {shoppingList.map(({ productId, title, image }) => (
          <List.Row key={productId + title}>
            <Link href={`${PATH.DETAIL}/${productId}`}>
              <Stack className='items-center'>
                <Image
                  width={200}
                  height={200}
                  src={image}
                  alt={`shopping-item-image-${productId}`}
                  className='h-[200px] bg-gray-200 object-contain rounded-md'
                />
                <Text
                  variant='subtitle'
                  className='line-clamp-1'
                >
                  {removeMarkdownBoldTag(title)}
                </Text>
              </Stack>
            </Link>
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
