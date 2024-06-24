import Navigation from '@/components/Navigation';
import AsyncBoundary from '@/components/Shared/AsyncBoundary';
import PageLayout from '@/components/Shared/Layout/PageLayout';
import HydratedShoppingList from '@/components/Shopping/HydratedShoppingList';
import HydratedWeatherList from '@/components/Weather/HydratedWeatherList';
import WeatherListSkeleton from '@/components/Weather/WeatherListSkeleton';

export default function Main() {
  return (
    <PageLayout
      className='pb-[70px]'
      bottom={<Navigation />}
    >
      <main>
        <AsyncBoundary suspenseFallback={<WeatherListSkeleton />}>
          <HydratedWeatherList />
        </AsyncBoundary>
        <AsyncBoundary>
          <HydratedShoppingList />
        </AsyncBoundary>
      </main>
    </PageLayout>
  );
}
