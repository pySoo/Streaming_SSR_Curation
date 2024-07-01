'use client';

import useWeatherStore from '@/store/weatherStore';
import { getDayTime } from '@/utils/date';

import { Cloud, Rain, Snow, Stars, Sun } from './Animation';
import { getCurrentSkyColor } from './utils';

export default function WeatherBackground() {
  const currentWeather = useWeatherStore((state) => state.currentWeather);
  const weatherSummary = currentWeather?.summary;

  const isDay = getDayTime() === 'day';

  const cloudCover =
    weatherSummary === 'cloudy'
      ? 60
      : weatherSummary === 'partly cloudy'
        ? 30
        : 0;

  const skyColor = getCurrentSkyColor({
    isRaining: weatherSummary === 'rain',
  });

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
