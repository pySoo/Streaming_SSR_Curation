import CurationSection from '@/components/Curation/CurationSection';
import CurationSkeleton from '@/components/Curation/Skeleton/CurationSkeleton';
import Navigation from '@/components/Navigation';
import AsyncBoundary from '@/components/Shared/AsyncBoundary';
import Border from '@/components/Shared/Border';
import PageLayout from '@/components/Shared/Layout/PageLayout';
import Stack from '@/components/Shared/Layout/Stack';
import HydratedWeatherBackground from '@/components/Weather/Background/HydratedWeatherBackground';
import CurrentWeatherSkeleton from '@/components/Weather/CurrentWeather/CurrentWeatherSkeleton';
import HydratedCurrentWeather from '@/components/Weather/CurrentWeather/HydratedCurrentWeather';
import HydratedWeatherList from '@/components/Weather/HydratedWeatherList';
import WeatherListSkeleton from '@/components/Weather/WeatherListSkeleton';

export default function Main() {
  return (
    <PageLayout
      className='pb-navigation'
      bottom={<Navigation />}
      background={<HydratedWeatherBackground />}
    >
      <main>
        <AsyncBoundary suspenseFallback={<CurrentWeatherSkeleton />}>
          <HydratedCurrentWeather />
        </AsyncBoundary>
        <Stack className='gap-10'>
          <AsyncBoundary suspenseFallback={<WeatherListSkeleton />}>
            <HydratedWeatherList />
          </AsyncBoundary>
          <Border size={1} />
          <AsyncBoundary suspenseFallback={<CurationSkeleton />}>
            <CurationSection />
          </AsyncBoundary>
        </Stack>
      </main>
    </PageLayout>
  );
}
