import { useInfiniteQuery, useQuery } from '@tanstack/react-query';

import { QUERY_KEYS } from '@/app/api/queries/queryKey';
import { ShoppingListResponse } from '@/app/api/types';
import { handleError } from '@/app/api/utils';
import useLikeStore from '@/store/likeStore';

export const getShoppingList = async (
  page: number = 1,
  query: string,
  display: number = 10,
) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_LOCAL_HOST}/api/getShoppingList?query=${query}&page=${page}&display=${display}`,
  );

  if (!response.ok) {
    handleError(response);
    return null;
  }

  const result: ShoppingListResponse = await response.json();
  return result;
};

export const useGetShoppingList = ({ query }: { query: string }) => {
  const likeList = useLikeStore((state) => state.likeList);

  return useInfiniteQuery(
    QUERY_KEYS.SHOPPING.LIST(query),
    ({ pageParam = 1 }) => getShoppingList(pageParam, query),
    {
      getNextPageParam: (lastPage) => {
        if (lastPage === null) return false;

        const { start, total, display } = lastPage;

        const nextPage = start + 1;
        const finalPage = Math.ceil(total / display);

        return start === finalPage ? false : nextPage;
      },
      select: (data) => ({
        pages: data.pages.flatMap((result) => {
          if (result === null) return [];

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

export const useCurationShoppingList = ({
  query,
  display = 9,
}: {
  query: string;
  display?: number;
}) => {
  const likeList = useLikeStore((state) => state.likeList);

  return useQuery(
    QUERY_KEYS.SHOPPING.LIST(query, display),
    () => getShoppingList(1, query, display),
    {
      select: (data) => {
        if (data === null) return [];

        const filteredProduct = data.items.map((item) => {
          const isLikedItem = likeList.findIndex(
            (likeItem) => likeItem.productId === item.productId,
          );

          return { ...item, isLiked: isLikedItem > -1 };
        });

        return filteredProduct;
      },
      suspense: true,
    },
  );
};
