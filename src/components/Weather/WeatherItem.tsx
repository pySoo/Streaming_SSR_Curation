import Image from 'next/image';

import { Weather } from '@/app/api/types';
import { convertTimestampToDate, isToday } from '@/utils/date';

import List from '../Shared/Layout/List';
import Stack from '../Shared/Layout/Stack';
import Text from '../Shared/Text';

interface WeatherItemProps {
  weather: Weather;
}

export default function WeatherItem({ weather }: WeatherItemProps) {
  const { time, title, icon, temperatureHigh, temperatureLow } = weather;

  const isTodayWeather = isToday(time);

  return (
    <List.Row className='w-[140px] h-[160px] flex flex-col justify-center items-center shrink-0 border-[1px] border-white/30 rounded-lg py-2 px-4 bg-[#277ecf]/20'>
      <Text
        className={`${isTodayWeather ? 'text-blue-300 font-medium' : 'text-gray-300'}`}
      >
        {convertTimestampToDate(time)}
      </Text>
      <Image
        width={50}
        height={50}
        className='max-w-[50px] object-contain mx-auto'
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        alt={`weather-image`}
      />
      <Text variant='caption'>{title}</Text>
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
