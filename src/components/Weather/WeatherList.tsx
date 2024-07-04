'use client';

import { useEffect } from 'react';

import { useGetWeatherList } from '@/hooks/apis/getWeatherList';
import useWeatherStore from '@/store/weatherStore';

import List from '../Shared/Layout/List';
import WeatherItem from './WeatherItem';

export default function WeatherList() {
  const { data: weatherList } = useGetWeatherList();
  const setWeatherList = useWeatherStore((state) => state.setWeatherList);
  const setTodayWeather = useWeatherStore((state) => state.setTodayWeather);

  useEffect(() => {
    setWeatherList(weatherList ?? []);
    setTodayWeather(weatherList?.[0] ?? null);
  }, [weatherList]);

  if (weatherList == null) return null;

  return (
    <List className='flex-row items-center gap-2 overflow-auto px-5 mx-[-20px] scrollbar-hide'>
      {weatherList.map((weather) => (
        <WeatherItem
          key={weather.time}
          weather={weather}
        />
      ))}
    </List>
  );
}
