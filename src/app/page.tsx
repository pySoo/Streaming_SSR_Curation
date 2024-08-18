import CurationSection from '@/components/Curation/CurationSection';
import CurationSkeleton from '@/components/Curation/Skeleton/CurationSkeleton';
import Navigation from '@/components/Navigation';
import AsyncBoundary from '@/components/Shared/AsyncBoundary';
import Border from '@/components/Shared/Border';
import PageLayout from '@/components/Shared/Layout/PageLayout';
import Stack from '@/components/Shared/Layout/Stack';
import HydratedWeatherBackground from '@/components/Weather/Background/HydratedWeatherBackground';
import CurrentWeatherSection from '@/components/Weather/CurrentWeather/CurrentWeatherSection';
import CurrentWeatherSkeleton from '@/components/Weather/CurrentWeather/CurrentWeatherSkeleton';
import WeatherListSection from '@/components/Weather/WeatherListSection';
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
          <CurrentWeatherSection />
        </AsyncBoundary>
        <Stack className='gap-10'>
          <AsyncBoundary suspenseFallback={<WeatherListSkeleton />}>
            <WeatherListSection />
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
