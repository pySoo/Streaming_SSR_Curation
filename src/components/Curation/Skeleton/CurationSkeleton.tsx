import Stack from '@/components/Shared/Layout/Stack';
import Skeleton from '@/components/Shared/Skeleton';
import Text from '@/components/Shared/Text';

import CurationListSkeleton from './CurationListSkeleton';

export default function CurationSkeleton() {
  return (
    <div role='status'>
      <CurationSkeleton.ClothesCuration />
      <CurationSkeleton.CosmeticCuration />
    </div>
  );
}

CurationSkeleton.ClothesCuration = () => (
  <Stack>
    <Text variant='title'>오늘 뭐입지?</Text>
    <Stack className='gap-10'>
      {[...Array(2)].map((_, index) => (
        <Stack key={index}>
          <Skeleton className='w-[280px] h-[32px]' />
          <Skeleton className='ml-auto w-[220px] h-[32px] mt-2 mb-4' />
          <CurationSkeleton.ClothesCurationList />
        </Stack>
      ))}
    </Stack>
  </Stack>
);

CurationSkeleton.CosmeticCuration = () => (
  <Stack>
    <Text variant='title'>일주일간 날씨 특징</Text>
    <Skeleton className='w-[400px] h-[32px] mb-5' />
    <Stack className='h-[240px] justify-between'>
      <Skeleton className='w-[200px] h-[28px]' />
      <CurationSkeleton.CosmeticCurationList />
    </Stack>
  </Stack>
);

CurationSkeleton.ClothesCurationList = () => (
  <CurationListSkeleton variant='clothes' />
);

CurationSkeleton.CosmeticCurationList = () => (
  <CurationListSkeleton variant='cosmetic' />
);
