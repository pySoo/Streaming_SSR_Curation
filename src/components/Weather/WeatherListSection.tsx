import Text from '../Shared/Text';
import WeatherList from './WeatherList';

export default function WeatherListSection() {
  return (
    <section>
      <Text variant='title'>이번 주 날씨</Text>
      <WeatherList />
    </section>
  );
}
