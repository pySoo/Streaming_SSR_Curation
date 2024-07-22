import { useQuery } from '@tanstack/react-query';

import { QUERY_KEYS } from '@/app/api/queries/queryKey';
import { CurrentWeather, Weather } from '@/app/api/types';
import { handleError } from '@/app/api/utils';

import { REVALIDATE_TIME } from './constants';

export const getWeatherList = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_LOCAL_HOST}/api/getWeatherList`,
    { next: { revalidate: REVALIDATE_TIME.DAY } },
  );

  if (!response.ok) {
    handleError(response);
    return null;
  }

  const result: Weather[] = await response.json();
  return result;
};

export const getCurrentWeather = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_LOCAL_HOST}/api/getCurrentWeather`,
    { next: { revalidate: REVALIDATE_TIME.HOUR } },
  );

  if (!response.ok) {
    handleError(response);
    return null;
  }

  const result: CurrentWeather = await response.json();
  return result;
};

export const useGetWeatherList = () => {
  return useQuery(QUERY_KEYS.WEATHER.LIST, getWeatherList);
};

export const useGetCurrentWeather = () => {
  return useQuery(QUERY_KEYS.WEATHER.CURRENT, getCurrentWeather);
};
