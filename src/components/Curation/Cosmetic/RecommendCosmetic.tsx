'use client';

import useWeatherStore from '@/store/weatherStore';
import { getCurationListByWeather } from '@/utils/curation';

import AsyncBoundary from '../../Shared/AsyncBoundary';
import Stack from '../../Shared/Layout/Stack';
import Tag from '../../Shared/Tag';
import Text from '../../Shared/Text';
import CurationList from '../CurationList';
import CurationSkeleton from '../Skeleton/CurationSkeleton';

export default function RecommendCosmetic() {
  const weatherList = useWeatherStore((state) => state.weatherList);

  if (weatherList == null) return null;

  const curationList = getCurationListByWeather(weatherList);
  const curationKeywords = curationList.map(({ keyword }) => keyword);

  return (
    <>
      <Stack.Row className='gap-2'>
        {curationKeywords.map((keyword, index) => (
          <Tag
            key={keyword}
            className='bg-primary cursor-default'
          >
            {keyword}
          </Tag>
        ))}
      </Stack.Row>
      <Stack className='mt-5 gap-10'>
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
                className='grid-cols-4'
              />
            </AsyncBoundary>
          </Stack>
        ))}
      </Stack>
    </>
  );
}
