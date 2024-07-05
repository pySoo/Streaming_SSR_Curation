'use client';

import { useGetWeatherList } from '@/hooks/apis/getWeatherList';
import { getClothesByTemperature } from '@/utils/curation';

import Stack from '../../Shared/Layout/Stack';
import ClothesByTemperature from './ClothesByTemperature';

export default function RecommendClothes() {
  const { data: weatherList } = useGetWeatherList();

  if (weatherList == null) return null;

  const todayWeather = weatherList[0];

  return (
    <Stack className='gap-12'>
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
