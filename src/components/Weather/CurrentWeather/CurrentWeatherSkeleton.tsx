import Stack from '@/components/Shared/Layout/Stack';
import Skeleton from '@/components/Shared/Skeleton';

export default function CurrentWeatherSkeleton() {
  return (
    <Stack className='items-center space-y-1 pt-10 pb-14'>
      <Skeleton className='w-[154px] h-[40px]' />
      <Skeleton className='w-[108px] h-[72px]' />
      <Skeleton className='w-[45px] h-[28px]' />
    </Stack>
  );
}
