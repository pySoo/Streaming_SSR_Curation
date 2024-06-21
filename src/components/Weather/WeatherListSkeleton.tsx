import List from '../Shared/Layout/List';
import Text from '../Shared/Text';

export default function WeatherListSkeleton() {
  return (
    <div
      role='status'
      className='w-full relative animate-pulse pt-[35px]'
    >
      <Text className='w-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[calc(-50%)] text-gray-500 text-center'>
        날씨 정보를 가져오고 있어요 🌤️
      </Text>
      <List className='flex-row items-center gap-2 overflow-auto px-5 pb-4 mx-[-20px]'>
        {[...Array(7)].map((_, index) => (
          <List.Row
            key={index}
            className='w-[140px] h-[160px] shrink-0 bg-gray-100 rounded-lg'
          />
        ))}
      </List>
    </div>
  );
}
