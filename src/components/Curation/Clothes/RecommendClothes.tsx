'use client';

import useWeatherStore from '@/store/weatherStore';
import { getClothesByTemperature } from '@/utils/curation';

import Stack from '../../Shared/Layout/Stack';
import ClothesByTemperature from './ClothesByTemperature';

export default function RecommendClothes() {
  const currentWeather = useWeatherStore((state) => state.currentWeather);

  if (currentWeather == null) return null;

  return (
    <Stack className='gap-10'>
      <ClothesByTemperature
        temperature={currentWeather.temperatureLow}
        keywords={getClothesByTemperature(currentWeather.temperatureLow)}
        isLowTemperature
      />
      <ClothesByTemperature
        temperature={currentWeather.temperatureHigh}
        keywords={getClothesByTemperature(currentWeather.temperatureHigh)}
        isLowTemperature={false}
      />
    </Stack>
  );
}
