'use client';

import { useEffect, useState } from 'react';

import { useGetCurrentWeather } from '@/hooks/apis/getWeatherList';
import { getDayTime } from '@/utils/date';

import { Cloud, Rain, Snow, Stars, Sun } from './Animation';
import { getCurrentSkyColor, getDefaultSkyColor } from './utils';

export default function WeatherBackground() {
  const [isDay, setIsDay] = useState(true);
  const [skyColor, setSkyColor] = useState(getDefaultSkyColor());
  const { data: currentWeather } = useGetCurrentWeather();

  const weatherSummary = currentWeather?.summary;

  const cloudCover =
    weatherSummary === 'cloudy'
      ? 60
      : weatherSummary === 'partly cloudy'
        ? 30
        : 0;

  useEffect(() => {
    setIsDay(getDayTime() === 'day');
    setSkyColor(getCurrentSkyColor());
  }, []);

  return (
    <div
      className='w-full text-lg h-full min-h-screen absolute top-0 left-0 pb-navigation'
      style={{
        background: `linear-gradient(${skyColor})`,
      }}
    >
      {isDay && weatherSummary === 'clear' && <Sun UVindex={60} />}
      {!isDay && <Stars />}
      {cloudCover > 0 && <Cloud cloudCover={cloudCover} />}
      {weatherSummary === 'rain' && <Rain />}
      {weatherSummary === 'snow' && <Snow />}
    </div>
  );
}
