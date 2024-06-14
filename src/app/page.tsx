import AsyncBoundary from '@/components/Shared/AsyncBoundary';
import PageLayout from '@/components/Shared/Layout/PageLayout';
import HydratedShoppingList from '@/components/Shopping/HydratedShoppingList';

export default function Main() {
  return (
    <PageLayout>
      <main>
        <AsyncBoundary>
          <HydratedShoppingList />
        </AsyncBoundary>
      </main>
    </PageLayout>
  );
}
