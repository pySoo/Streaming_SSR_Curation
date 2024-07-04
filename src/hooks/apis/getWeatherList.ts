import { useQuery } from '@tanstack/react-query';

import { ERROR_MESSAGE } from '@/app/api/constants';
import { QUERY_KEYS } from '@/app/api/queries/queryKey';
import { CurrentWeather, Weather } from '@/app/api/types';
import useWeatherStore from '@/store/weatherStore';
import { toastify } from '@/components/Shared/Toast/utils';

export const getWeatherList = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_LOCAL_HOST}/api/getWeatherList`,
  );

  if (!response.ok) {
    toastify.error(ERROR_MESSAGE[response.status]);
    return null;
  }

  const result: Weather[] = await response.json();
  return result;
};

export const getCurrentWeather = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_LOCAL_HOST}/api/getCurrentWeather`,
  );

  if (!response.ok) {
    toastify.error(ERROR_MESSAGE[response.status]);
    return null;
  }

  const result: CurrentWeather = await response.json();
  return result;
};

export const useGetWeatherList = () => {
  const setWeatherList = useWeatherStore((state) => state.setWeatherList);
  const setTodayWeather = useWeatherStore((state) => state.setTodayWeather);

  return useQuery([QUERY_KEYS.WEATHER.LIST], getWeatherList, {
    select: (data) => {
      setWeatherList(data);
      setTodayWeather(data[0]);
      return data;
    },
  });
};

export const useGetCurrentWeather = () => {
  return useQuery([QUERY_KEYS.WEATHER.CURRENT], getCurrentWeather);
};
