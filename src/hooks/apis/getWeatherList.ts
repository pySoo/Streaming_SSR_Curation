import { useQuery } from '@tanstack/react-query';

import { QUERY_KEYS } from '@/app/api/queries/queryKey';
import { Weather } from '@/app/api/types';

export const getWeatherList = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_LOCAL_HOST}/api/getWeatherList`,
  );

  if (!response.ok) {
    console.error(response.status);
  }

  const result: Weather[] = await response.json();
  return result;
};

export const useGetWeatherList = () => {
  return useQuery([QUERY_KEYS.WEATHER.LIST], getWeatherList);
};
