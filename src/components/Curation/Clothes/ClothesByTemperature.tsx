import { useEffect, useState } from 'react';

import { Weather } from '@/app/api/types';
import { getClothesByTemperature } from '@/utils/curation';

import AsyncBoundary from '../../Shared/AsyncBoundary';
import List from '../../Shared/Layout/List';
import Stack from '../../Shared/Layout/Stack';
import Tag from '../../Shared/Tag';
import Text from '../../Shared/Text';
import CurationList from '../CurationList';
import CurationListSkeleton from '../CurationListSkeleton';

interface Props {
  weather: Weather;
  isLowTemperature: boolean;
}

export default function ClothesByTemperature({
  weather,
  isLowTemperature,
}: Props) {
  const [matchedClothes, setMatchedClothes] = useState<string[]>([]);
  const [selectedCloth, setSelectedCloth] = useState<string>(
    matchedClothes[0] ?? '',
  );

  const handleKeywordClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const cloth = e.currentTarget.textContent;
    if (cloth == null) return;

    setSelectedCloth(cloth);
  };

  useEffect(() => {
    if (weather == null) return;

    const temperature = isLowTemperature
      ? weather.temperatureLow
      : weather.temperatureHigh;

    const matchedClothes = getClothesByTemperature(temperature);

    setMatchedClothes(matchedClothes);
    setSelectedCloth(matchedClothes[0] ?? '');
  }, [weather]);

  return (
    <Stack>
      <Stack>
        <Stack.Row className='items-end'>
          <Tag
            className={`cursor-default text-white ${isLowTemperature ? 'bg-blue-400' : 'bg-orange-400'}`}
          >{`${isLowTemperature ? `최저 온도 ${weather.temperatureLow}` : `최고 온도 ${weather.temperatureHigh}`}°C`}</Tag>
          <Text
            variant='caption'
            className='ml-1'
          >
            에 맞는 옷을 추천해드릴게요
          </Text>
        </Stack.Row>
        <List className='flex-row gap-2 ml-auto mt-2 mb-4'>
          {matchedClothes.map((cloth) => (
            <List.Row key={cloth}>
              <Tag
                onClick={handleKeywordClick}
                className={`${selectedCloth === cloth ? `${isLowTemperature ? 'bg-blue-500' : 'bg-orange-500'} text-white` : 'bg-gray-100 text-gray-500'}`}
              >
                {cloth}
              </Tag>
            </List.Row>
          ))}
        </List>
      </Stack>
      {selectedCloth && (
        <AsyncBoundary suspenseFallback={<CurationListSkeleton />}>
          <CurationList query={selectedCloth} />
        </AsyncBoundary>
      )}
    </Stack>
  );
}
