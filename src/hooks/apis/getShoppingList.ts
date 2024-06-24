import { useInfiniteQuery } from '@tanstack/react-query';

import { QUERY_KEYS } from '@/app/api/queries/queryKey';
import { ShoppingListResponse } from '@/app/api/types';
import useLikeStore from '@/store/likeStore';

const MOCK_QUERY = 'summer';

export const getShoppingList = async (
  page: number = 1,
  query: string = MOCK_QUERY,
  display: number = 10,
) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_LOCAL_HOST}/api/getShoppingList?query=${query}&page=${page}&display=${display}`,
  );

  if (!response.ok) {
    console.error(response.status);
  }

  const result: ShoppingListResponse = await response.json();
  return result;
};

export const useGetShoppingList = ({ query }: { query?: string } = {}) => {
  const likeList = useLikeStore((state) => state.likeList);

  return useInfiniteQuery(
    [QUERY_KEYS.SHOPPING.LIST, query],
    ({ pageParam = 1 }) => getShoppingList(pageParam, query),
    {
      getNextPageParam: (lastPage) => {
        const { start, total, display } = lastPage;

        const nextPage = start + 1;
        const finalPage = Math.ceil(total / display);

        return start === finalPage ? false : nextPage;
      },
      select: (data) => ({
        pages: data.pages.flatMap((result) => {
          const filteredProduct = result.items.map((item) => {
            const isLikedItem = likeList.findIndex(
              (likeItem) => likeItem.productId === item.productId,
            );

            return { ...item, isLiked: isLikedItem > -1 };
          });

          return filteredProduct;
        }),
        pageParams: data.pageParams,
      }),
      suspense: true,
    },
  );
};
