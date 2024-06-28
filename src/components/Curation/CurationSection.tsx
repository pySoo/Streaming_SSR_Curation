'use client';

import useWeatherStore from '@/store/weatherStore';

import Stack from '../Shared/Layout/Stack';
import ClothesCuration from './Clothes/ClothesCuration';
import CosmeticCuration from './Cosmetic/CosmeticCuration';

export default function CurationSection() {
  const weatherList = useWeatherStore((state) => state.weatherList);
  const todayWeather = weatherList[0];

  if (todayWeather == null) return null;

  return (
    <section>
      <Stack className='gap-10'>
        <ClothesCuration />
        <CosmeticCuration />
      </Stack>
    </section>
  );
}
