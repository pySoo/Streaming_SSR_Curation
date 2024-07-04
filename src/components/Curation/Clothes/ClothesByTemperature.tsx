import { useEffect, useState } from 'react';

import Spacing from '@/components/Shared/Spacing';
import { getClothesByTemperature } from '@/utils/curation';

import AsyncBoundary from '../../Shared/AsyncBoundary';
import List from '../../Shared/Layout/List';
import Stack from '../../Shared/Layout/Stack';
import Tag from '../../Shared/Tag';
import Text from '../../Shared/Text';
import CurationList from '../CurationList';
import CurationSkeleton from '../Skeleton/CurationSkeleton';

interface Props {
  temperature: number;
  keywords: string[];
  isLowTemperature: boolean;
}

export default function ClothesByTemperature({
  temperature,
  keywords,
  isLowTemperature,
}: Props) {
  const [matchedClothes, setMatchedClothes] = useState<string[]>(keywords);
  const [selectedCloth, setSelectedCloth] = useState<string>(matchedClothes[0]);

  const handleKeywordClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const cloth = e.currentTarget.textContent;
    if (cloth == null) return;

    setSelectedCloth(cloth);
  };

  useEffect(() => {
    const matchedClothes = getClothesByTemperature(temperature);

    setMatchedClothes(matchedClothes);
    setSelectedCloth(matchedClothes[0]);
  }, [temperature]);

  return (
    <Stack>
      <Stack>
        <Stack.Row className='items-end'>
          <Tag
            className={`cursor-default text-white ${isLowTemperature ? 'bg-primary' : 'bg-darkRed'}`}
          >{`${isLowTemperature ? '최저' : '최고'} 온도 ${temperature} °C`}</Tag>
          <Text
            variant='caption'
            className='ml-1'
          >
            에 맞는 옷을 추천해드릴게요
          </Text>
        </Stack.Row>
        <Spacing size={15} />
        <List className='flex-row gap-2 ml-auto'>
          {matchedClothes.map((cloth) => (
            <List.Row key={cloth}>
              <Tag
                onClick={handleKeywordClick}
                className={`${selectedCloth === cloth ? `${isLowTemperature ? 'bg-primary' : 'bg-darkRed'} text-white` : 'bg-gray-100 text-darkGray font-medium'}`}
              >
                {cloth}
              </Tag>
            </List.Row>
          ))}
        </List>
        <Spacing size={20} />
      </Stack>
      {selectedCloth && (
        <AsyncBoundary
          suspenseFallback={<CurationSkeleton.ClothesCurationList />}
        >
          <CurationList
            query={selectedCloth}
            className='grid-cols-2 sm:grid-cols-3'
            isPriority={isLowTemperature}
          />
        </AsyncBoundary>
      )}
    </Stack>
  );
}
