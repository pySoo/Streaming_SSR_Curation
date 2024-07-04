'use client';

import Spacing from '@/components/Shared/Spacing';
import { useGetWeatherList } from '@/hooks/apis/getWeatherList';
import { getCurationListByWeather } from '@/utils/curation';

import AsyncBoundary from '../../Shared/AsyncBoundary';
import Stack from '../../Shared/Layout/Stack';
import Tag from '../../Shared/Tag';
import Text from '../../Shared/Text';
import CurationList from '../CurationList';
import CurationSkeleton from '../Skeleton/CurationSkeleton';

export default function RecommendCosmetic() {
  const { data: weatherList } = useGetWeatherList();

  if (weatherList == null) return null;

  const curationList = getCurationListByWeather(weatherList);
  const curationKeywords = curationList.map(({ keyword }) => keyword);

  return (
    <>
      <Stack.Row className='gap-2 flex-wrap'>
        {curationKeywords.map((keyword) => (
          <Tag
            key={keyword}
            className='bg-blue-500 cursor-default'
          >
            {keyword}
          </Tag>
        ))}
      </Stack.Row>
      <Spacing size={30} />
      <Stack className='gap-10'>
        {curationList.map(({ description, query }) => (
          <Stack
            key={query}
            className='gap-2'
          >
            <Text variant='subtitle'>{description}</Text>
            <AsyncBoundary
              suspenseFallback={<CurationSkeleton.CosmeticCurationList />}
            >
              <CurationList
                query={query}
                display={4}
                className='grid-cols-2 sm:grid-cols-4'
              />
            </AsyncBoundary>
          </Stack>
        ))}
      </Stack>
    </>
  );
}
