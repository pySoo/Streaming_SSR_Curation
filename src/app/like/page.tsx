import Navigation from '@/components/Navigation';
import PageLayout from '@/components/Shared/Layout/PageLayout';

import LikeListSection from './LikeListSection';

export default function LikePage() {
  return (
    <PageLayout>
      <LikeListSection />
      <Navigation />
    </PageLayout>
  );
}
