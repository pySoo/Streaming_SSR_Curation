import Navigation from '@/components/Navigation';
import PageLayout from '@/components/Shared/Layout/PageLayout';
import HydratedWeatherBackground from '@/components/Weather/Background/HydratedWeatherBackground';

import LikeListSection from './LikeListSection';

export default function LikePage() {
  return (
    <PageLayout background={<HydratedWeatherBackground />}>
      <LikeListSection />
      <Navigation />
    </PageLayout>
  );
}
