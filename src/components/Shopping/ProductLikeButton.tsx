'use client';

import { Product } from '@/app/api/types';
import useLikeStore from '@/store/likeStore';

import LikeButton from '../Shared/Button/LikeButton';

interface Props {
  product: Product;
}

export default function ProductLikeButton({ product }: Props) {
  const { productId, isLiked } = product;

  const addLikeItem = useLikeStore((state) => state.addLikeItem);
  const deleteLikeItem = useLikeStore((state) => state.deleteLikeItem);

  const handleClickLikeButton = (liked: boolean) => {
    if (liked) {
      addLikeItem({ ...product, isLiked: true });
    } else {
      deleteLikeItem(productId);
    }
  };

  return (
    <LikeButton
      value={isLiked}
      onChange={handleClickLikeButton}
    />
  );
}
