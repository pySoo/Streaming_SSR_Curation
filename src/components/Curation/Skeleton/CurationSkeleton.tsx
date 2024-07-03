import Border from '@/components/Shared/Border';
import Stack from '@/components/Shared/Layout/Stack';
import Skeleton from '@/components/Shared/Skeleton';
import Spacing from '@/components/Shared/Spacing';
import Text from '@/components/Shared/Text';

import ProductListSkeleton from '../../Shopping/ProductListSkeleton';

export default function CurationSkeleton() {
  return (
    <div
      role='status'
      className='flex flex-col gap-12'
    >
      <CurationSkeleton.ClothesCuration />
      <Border size={1} />
      <CurationSkeleton.CosmeticCuration />
    </div>
  );
}

CurationSkeleton.ClothesCuration = () => (
  <Stack>
    <Text variant='title'>오늘 뭐입지?</Text>
    <Stack className='gap-12'>
      {[...Array(2)].map((_, index) => (
        <Stack key={index}>
          <Skeleton className='w-[280px] h-[34px]' />
          <Spacing size={15} />
          <Skeleton className='ml-auto w-[220px] h-[34px]' />
          <Spacing size={20} />
          <CurationSkeleton.ClothesCurationList />
        </Stack>
      ))}
    </Stack>
  </Stack>
);

CurationSkeleton.CosmeticCuration = () => (
  <Stack>
    <Text variant='title'>일주일간 날씨 특징</Text>
    <Stack.Row className='gap-2'>
      {[...Array(3)].map((_, index) => (
        <Skeleton
          key={index}
          className='h-[34px]'
        />
      ))}
    </Stack.Row>
    <Spacing size={30} />
    <Stack className='gap-10'>
      {[...Array(3)].map((_, index) => (
        <Stack
          key={index}
          className='gap-2'
        >
          <Skeleton className='w-[200px] h-[28px]' />
          <CurationSkeleton.CosmeticCurationList />
        </Stack>
      ))}
    </Stack>
  </Stack>
);

CurationSkeleton.ClothesCurationList = () => (
  <ProductListSkeleton variant='clothes' />
);

CurationSkeleton.CosmeticCurationList = () => (
  <ProductListSkeleton variant='cosmetic' />
);
