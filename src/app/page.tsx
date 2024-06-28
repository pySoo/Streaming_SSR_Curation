import CurationSection from '@/components/Curation/CurationSection';
import CurationSkeleton from '@/components/Curation/Skeleton/CurationSkeleton';
import Navigation from '@/components/Navigation';
import AsyncBoundary from '@/components/Shared/AsyncBoundary';
import PageLayout from '@/components/Shared/Layout/PageLayout';
import Stack from '@/components/Shared/Layout/Stack';
import HydratedWeatherList from '@/components/Weather/HydratedWeatherList';
import WeatherListSkeleton from '@/components/Weather/WeatherListSkeleton';

export default function Main() {
  return (
    <PageLayout
      className='pt-5 pb-[70px]'
      bottom={<Navigation />}
    >
      <main>
        <Stack className='gap-10'>
          <AsyncBoundary suspenseFallback={<WeatherListSkeleton />}>
            <HydratedWeatherList />
          </AsyncBoundary>
          <AsyncBoundary suspenseFallback={<CurationSkeleton />}>
            <CurationSection />
          </AsyncBoundary>
        </Stack>
      </main>
    </PageLayout>
  );
}
