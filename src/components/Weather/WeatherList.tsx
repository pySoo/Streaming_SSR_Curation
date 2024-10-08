'use client';

import { useGetWeatherList } from '@/hooks/apis/getWeatherList';

import List from '../Shared/Layout/List';
import WeatherItem from './WeatherItem';

export default function WeatherList() {
  const { data: weatherList } = useGetWeatherList();

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
