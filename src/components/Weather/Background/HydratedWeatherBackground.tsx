import { dehydrate, Hydrate } from '@tanstack/react-query';

import getQueryClient from '@/app/api/queries/getQueryClient';
import { QUERY_KEYS } from '@/app/api/queries/queryKey';
import { getCurrentWeather } from '@/hooks/apis/getWeatherList';

import WeatherBackground from './WeatherBackground';

export default async function HydratedWeatherBackground() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(QUERY_KEYS.WEATHER.CURRENT, () =>
    getCurrentWeather(),
  );

  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <WeatherBackground />
    </Hydrate>
  );
}
