'use client';

import useWeatherStore from '@/store/weatherStore';

import Stack from '../Shared/Layout/Stack';
import Text from '../Shared/Text';
import ClothesByTemperature from './ClothesByTemperature';

export default function RecommendClothes() {
  const weatherList = useWeatherStore((state) => state.weatherList);
  const todayWeather = weatherList[0];

  if (todayWeather == null) return null;

  return (
    <Stack>
      <Text variant='title'>오늘 뭐입지?</Text>
      <Stack className='gap-10'>
        <ClothesByTemperature
          weather={todayWeather}
          isLowTemperature
        />
        <ClothesByTemperature
          weather={todayWeather}
          isLowTemperature={false}
        />
      </Stack>
    </Stack>
  );
}
