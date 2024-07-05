'use client';

import Stack from '@/components/Shared/Layout/Stack';
import Text from '@/components/Shared/Text';
import { useGetCurrentWeather } from '@/hooks/apis/getWeatherList';

export default function CurrentWeatherText() {
  const cityName = '서울특별시';
  const { data: currentWeather } = useGetCurrentWeather();

  if (currentWeather == null) return null;

  const { title, temperature } = currentWeather;

  return (
    <Stack className='items-center space-y-1 pt-10 pb-14 text-white'>
      <Text className='text-4xl shadow-text'>{cityName}</Text>
      <Text className='text-7xl shadow-text font-extralight'>
        {temperature}°
      </Text>
      <Text className='text-xl shadow-text'>{title}</Text>
    </Stack>
  );
}
