import Navigation from '@/components/Navigation';
import PageLayout from '@/components/Shared/Layout/PageLayout';
import WeatherBackground from '@/components/Weather/Background/WeatherBackground';

import LikeListSection from './LikeListSection';

export default function LikePage() {
  return (
    <PageLayout
      className='pb-navigation'
      background={<WeatherBackground />}
    >
      <LikeListSection />
      <Navigation />
    </PageLayout>
  );
}
