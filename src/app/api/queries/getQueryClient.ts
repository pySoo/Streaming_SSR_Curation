import { QueryClient } from '@tanstack/react-query';
import { cache } from 'react';

const getQueryClient = cache(
  () =>
    new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
          suspense: true,
          staleTime: 1000 * 60,
        },
      },
    }),
);

export default getQueryClient;
