import AsyncBoundary from '../Shared/AsyncBoundary';
import Text from '../Shared/Text';
import WeatherList from './WeatherList';
import WeatherListSkeleton from './WeatherListSkeleton';

export default function WeatherListSection() {
  return (
    <section>
      <Text variant='subtitle'>이번 주 날씨</Text>
      <AsyncBoundary suspenseFallback={<WeatherListSkeleton />}>
        <WeatherList />
      </AsyncBoundary>
    </section>
  );
}
