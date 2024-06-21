import { dehydrate, Hydrate } from '@tanstack/react-query';

import getQueryClient from '@/app/api/queries/getQueryClient';
import { QUERY_KEYS } from '@/app/api/queries/queryKey';
import { getWeatherList } from '@/hooks/apis/getWeatherList';

import WeatherListSection from './WeatherListSection';

export default async function HydratedWeatherList() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery([QUERY_KEYS.WEATHER.LIST], () =>
    getWeatherList(),
  );

  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <WeatherListSection />
    </Hydrate>
  );
}
