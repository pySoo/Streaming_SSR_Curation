import { create } from 'zustand';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';

import { Product, ProductId } from '@/app/api/types';

interface Props {
  likeList: Product[];
  selectedIds: ProductId[];
  setSelectedIds: (selectedIds: ProductId[]) => void;
  addLikeItem: (likeItem: Product) => void;
  deleteLikeItem: (productId: ProductId) => void;
  deleteSelectedItem: () => void;
}

const useLikeStore = create<Props>()(
  devtools(
    persist(
      (set) => ({
        likeList: [],
        selectedIds: [],
        setSelectedIds: (selectedIds: ProductId[]) => set({ selectedIds }),
        addLikeItem: (likeItem: Product) =>
          set(({ likeList }) => ({
            likeList: likeList.find(
              (item) => item.productId === likeItem.productId,
            )
              ? likeList
              : [...likeList, likeItem],
          })),
        deleteLikeItem: (productId: ProductId) =>
          set(({ likeList }) => ({
            likeList: likeList.filter((item) => item.productId !== productId),
          })),
        deleteSelectedItem: () =>
          set(({ likeList, selectedIds }) => ({
            likeList: likeList.filter(
              (item) => !selectedIds.includes(item.productId),
            ),
            selectedIds: [],
          })),
      }),
      {
        name: 'likeStore',
        storage: createJSONStorage(() => localStorage),
      },
    ),
  ),
);

export default useLikeStore;
