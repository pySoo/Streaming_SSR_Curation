import Image from 'next/image';
import { MouseEvent, ReactNode } from 'react';

import { Product } from '@/app/api/types';
import { convertToKRPrice, removeMarkdownBoldTag } from '@/utils/format';

import Stack from '../Shared/Layout/Stack';
import Text from '../Shared/Text';

interface Props {
  product: Product;
  isPriority?: boolean;
  right?: ReactNode;
}

export default function ProductCard({
  product,
  isPriority = false,
  right,
}: Props) {
  const { productId, image, title, lprice, link } = product;

  const handleCardClick = (event: MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLElement;
    const isProductItem = [
      'product-image',
      'product-title',
      'product-price',
    ].includes(target.id);

    if (isProductItem) {
      window.open(link, '_blank');
    }
  };

  return (
    <Stack
      className='w-full cursor-pointer'
      onClick={handleCardClick}
    >
      <Stack className='relative max-h-[300px] overflow-hidden rounded-md'>
        {right && (
          <div
            id='right'
            className='absolute right-[12px] top-[12px]'
          >
            {right}
          </div>
        )}
        <Image
          id='product-image'
          width={300}
          height={300}
          src={image}
          alt={`shopping-item-image-${productId}`}
          priority={isPriority}
          placeholder='blur'
          blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=='
          className='w-full h-full aspect-square bg-gray-100 object-cover'
        />
      </Stack>
      <Stack className='mt-2'>
        <Text
          id='product-price'
          className='text-sm font-semibold'
        >
          최저 {convertToKRPrice(lprice)}원
        </Text>
        <Text
          id='product-title'
          variant='caption'
          className='line-clamp-2'
        >
          {removeMarkdownBoldTag(title)}
        </Text>
      </Stack>
    </Stack>
  );
}
