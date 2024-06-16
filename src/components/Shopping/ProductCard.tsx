import Image from 'next/image';
import { ReactNode } from 'react';

import { Product } from '@/app/api/types';
import { convertToKRPrice, removeMarkdownBoldTag } from '@/utils/format';

import Stack from '../Shared/Layout/Stack';
import Text from '../Shared/Text';

interface Props {
  product: Product;
  right?: ReactNode;
}

export default function ProductCard({ product, right }: Props) {
  const { productId, image, title, lprice } = product;

  return (
    <Stack>
      <Stack className='relative max-h-[272px] overflow-hidden rounded-md'>
        {right && (
          <div className='absolute right-[12px] top-[12px]'>{right}</div>
        )}
        <Image
          width={300}
          height={300}
          src={image}
          alt={`shopping-item-image-${productId}`}
          className='h-full aspect-square bg-gray-100 object-contain'
        />
      </Stack>
      <Stack className='mt-2'>
        <Text className='text-sm font-semibold'>
          최저 {convertToKRPrice(lprice)}원
        </Text>
        <Text
          variant='caption'
          className='line-clamp-2'
        >
          {removeMarkdownBoldTag(title)}
        </Text>
      </Stack>
    </Stack>
  );
}
