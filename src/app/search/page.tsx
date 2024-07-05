import Navigation from '@/components/Navigation';
import PageLayout from '@/components/Shared/Layout/PageLayout';
import HydratedWeatherBackground from '@/components/Weather/Background/HydratedWeatherBackground';

import SearchSection from './SearchSection';

export default function SearchPage() {
  return (
    <PageLayout background={<HydratedWeatherBackground />}>
      <SearchSection />
      <Navigation />
    </PageLayout>
  );
}
