import Navigation from '@/components/Navigation';
import AsyncBoundary from '@/components/Shared/AsyncBoundary';
import PageLayout from '@/components/Shared/Layout/PageLayout';
import HydratedShoppingList from '@/components/Shopping/HydratedShoppingList';

export default function Main() {
  return (
    <PageLayout
      className='pb-[70px]'
      bottom={<Navigation />}
    >
      <main>
        <AsyncBoundary>
          <HydratedShoppingList />
        </AsyncBoundary>
      </main>
    </PageLayout>
  );
}
