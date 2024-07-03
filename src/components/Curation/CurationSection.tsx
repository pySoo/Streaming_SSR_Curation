'use client';

import useWeatherStore from '@/store/weatherStore';

import Border from '../Shared/Border';
import Stack from '../Shared/Layout/Stack';
import ClothesCuration from './Clothes/ClothesCuration';
import CosmeticCuration from './Cosmetic/CosmeticCuration';

export default function CurationSection() {
  const currentWeather = useWeatherStore((state) => state.currentWeather);

  if (currentWeather == null) return null;

  return (
    <section>
      <Stack className='gap-12'>
        <ClothesCuration />
        <Border size={1} />
        <CosmeticCuration />
      </Stack>
    </section>
  );
}
