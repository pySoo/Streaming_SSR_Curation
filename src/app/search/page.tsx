import Navigation from '@/components/Navigation';
import PageLayout from '@/components/Shared/Layout/PageLayout';
import WeatherBackground from '@/components/Weather/Background/WeatherBackground';

import SearchSection from './SearchSection';

export default function SearchPage() {
  return (
    <PageLayout
      className='pb-navigation'
      background={<WeatherBackground />}
    >
      <SearchSection />
      <Navigation />
    </PageLayout>
  );
}
