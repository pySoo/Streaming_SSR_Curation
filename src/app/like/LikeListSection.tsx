'use client';

import Link from 'next/link';

import Button from '@/components/Shared/Button';
import Stack from '@/components/Shared/Layout/Stack';
import Spacing from '@/components/Shared/Spacing';
import Text from '@/components/Shared/Text';
import { PATH } from '@/constants/path';
import useLikeStore from '@/store/likeStore';

import LikeEditSection from './LikeEditSection';

export default function LikeListSection() {
  const likeList = useLikeStore((state) => state.likeList);

  return (
    <section>
      {likeList.length > 0 && <LikeEditSection />}
      {likeList.length === 0 && (
        <Stack className='h-full min-h-screen justify-center items-center space-y-2'>
          <Stack className='items-center'>
            <Text variant='title'>북마크한 상품이 없습니다</Text>
            <Text>상품 우측 상단의 하트를 눌러보세요 🙌</Text>
          </Stack>
          <Spacing size={15} />
          <Link href={PATH.ROOT}>
            <Button>맞춤 상품 추천받기</Button>
          </Link>
        </Stack>
      )}
    </section>
  );
}
