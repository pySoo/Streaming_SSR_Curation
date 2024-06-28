'use client';

import useWeatherStore from '@/store/weatherStore';
import { getClothesByTemperature } from '@/utils/curation';

import Stack from '../../Shared/Layout/Stack';
import ClothesByTemperature from './ClothesByTemperature';

export default function RecommendClothes() {
  const weatherList = useWeatherStore((state) => state.weatherList);
  const todayWeather = weatherList[0];

  if (todayWeather == null) return null;

  return (
    <Stack className='gap-10'>
      <ClothesByTemperature
        temperature={todayWeather.temperatureLow}
        keywords={getClothesByTemperature(todayWeather.temperatureLow)}
        isLowTemperature
      />
      <ClothesByTemperature
        temperature={todayWeather.temperatureHigh}
        keywords={getClothesByTemperature(todayWeather.temperatureHigh)}
        isLowTemperature={false}
      />
    </Stack>
  );
}
