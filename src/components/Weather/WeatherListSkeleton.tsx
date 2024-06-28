import List from '../Shared/Layout/List';
import Skeleton from '../Shared/Skeleton';
import Text from '../Shared/Text';

export default function WeatherListSkeleton() {
  return (
    <div
      role='status'
      className='w-full relative'
    >
      <Text variant='title'>이번 주 날씨</Text>
      <Text className='w-full absolute top-[50%] left-[50%] translate-x-[-50%] text-gray-500 text-center z-[10] animate-pulse'>
        날씨 정보를 가져오고 있어요 🌤️
      </Text>
      <List className='flex-row items-center gap-2 overflow-hidden px-5 mx-[-20px]'>
        {[...Array(7)].map((_, index) => (
          <Skeleton key={index} />
        ))}
      </List>
    </div>
  );
}
