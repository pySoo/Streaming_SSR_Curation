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

  return <section>{likeList.length > 0 && <LikeEditSection />}</section>;
}
