'use client';

import { useGetCurrentWeather } from '@/hooks/apis/getWeatherList';
import { useBackground } from '@/hooks/useBackground';

import { Cloud, Rain, Snow, Stars, Sun } from './Animation';

export default function WeatherBackground() {
  const { data: currentWeather } = useGetCurrentWeather();
  const { dayTime, currentSkyColor } = useBackground();

  const isNight = dayTime === 'night';

  const weatherSummary = currentWeather?.summary;

  const cloudCover =
    weatherSummary === 'cloudy'
      ? 60
      : weatherSummary === 'partly cloudy'
        ? 30
        : 0;

  return (
    <div
      className='w-full text-lg h-full min-h-screen absolute top-0 left-0 pb-navigation'
      style={{
        background: `linear-gradient(${currentSkyColor})`,
      }}
    >
      {!isNight && weatherSummary === 'clear' && <Sun UVindex={60} />}
      {isNight && <Stars />}
      {cloudCover > 0 && <Cloud cloudCover={cloudCover} />}
      {weatherSummary === 'rain' && <Rain />}
      {weatherSummary === 'snow' && <Snow />}
    </div>
  );
}
