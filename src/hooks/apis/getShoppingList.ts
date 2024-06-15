import { useInfiniteQuery } from '@tanstack/react-query';

import { QUERY_KEYS } from '@/app/api/queries/queryKey';
import { ShoppingListResponse } from '@/app/api/types';

export const getShoppingList = async (page: number = 1) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_LOCAL_HOST}/api/getShoppingList?page=${page}`,
  );

  if (!response.ok) {
    console.error(response.status);
  }

  const result: ShoppingListResponse = await response.json();
  return result;
};

export default function useGetShoppingList() {
  return useInfiniteQuery(
    [QUERY_KEYS.SHOPPING.LIST],
    ({ pageParam = 1 }) => getShoppingList(pageParam),
    {
      getNextPageParam: (lastPage) => {
        const { start, total, display } = lastPage;

        const nextPage = start + 1;
        const finalPage = Math.ceil(total / display);

        return start === finalPage ? false : nextPage;
      },
      select: (data) => ({
        pages: data.pages.flatMap((value) => value.items),
        pageParams: data.pageParams,
      }),
      suspense: true,
    },
  );
}
