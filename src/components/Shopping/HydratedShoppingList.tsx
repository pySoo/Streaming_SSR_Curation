import { dehydrate, Hydrate } from '@tanstack/react-query';

import getQueryClient from '@/app/api/queries/getQueryClient';
import { QUERY_KEYS } from '@/app/api/queries/queryKey';
import { getShoppingList } from '@/hooks/useGetShoppingList';

import ShoppingListSection from './ShoppingListSection';

export default async function HydratedShoppingList() {
  const queryClient = getQueryClient();
  await queryClient.prefetchInfiniteQuery([QUERY_KEYS.SHOPPING.LIST], () =>
    getShoppingList(),
  );

  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <ShoppingListSection />
    </Hydrate>
  );
}
