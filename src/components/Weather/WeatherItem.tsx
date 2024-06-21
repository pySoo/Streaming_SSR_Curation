import { Weather } from '@/app/api/types';
import { convertTimestampToDate } from '@/utils/date';

import List from '../Shared/Layout/List';
import Stack from '../Shared/Layout/Stack';
import Text from '../Shared/Text';

interface WeatherItemProps {
  weather: Weather;
}

export default function WeatherItem({ weather }: WeatherItemProps) {
  const { time, summary, icon, temperatureHigh, temperatureLow } = weather;

  return (
    <List.Row className='w-[140px] h-[160px] flex flex-col justify-center items-center shrink-0 border-[1px] border-gray-200 rounded-lg py-2 px-4'>
      <Text className='font-[500]'>{convertTimestampToDate(time)}</Text>
      <img
        className='max-w-[50px] object-contain mx-auto'
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        alt={`weather-image`}
      />
      <Text variant='caption'>{summary}</Text>
      <Stack className='flex flex-col items-center text-sm mt-2'>
        <Text
          as='span'
          className='text-red-500'
        >{`최고 ${temperatureHigh}도`}</Text>
        <Text
          as='span'
          className='text-blue-400'
        >{`최저 ${temperatureLow}도`}</Text>
      </Stack>
    </List.Row>
  );
}
