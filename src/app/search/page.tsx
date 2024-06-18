import Navigation from '@/components/Navigation';
import PageLayout from '@/components/Shared/Layout/PageLayout';

import SearchSection from './SearchSection';

export default function SearchPage() {
  return (
    <PageLayout className='pb-[70px]'>
      <SearchSection />
      <Navigation />
    </PageLayout>
  );
}
