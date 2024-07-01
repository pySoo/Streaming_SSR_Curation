import List from '../../Shared/Layout/List';
import Stack from '../../Shared/Layout/Stack';
import Skeleton from '../../Shared/Skeleton';

interface Props {
  variant?: 'clothes' | 'cosmetic';
}

export default function CurationListSkeleton({ variant = 'clothes' }: Props) {
  return (
    <List className={`grid grid-item ${SKELETON_VARIANT[variant].className}`}>
      {[...Array(SKELETON_VARIANT[variant].arrayLength)].map((_, index) => (
        <List
          key={index}
          className='gap-0'
        >
          <Stack>
            <Skeleton className='w-full h-full max-h-[272px] aspect-square overflow-hidden rounded-md' />
          </Stack>
          <Skeleton className='mt-2 w-full h-[60px] rounded-md' />
        </List>
      ))}
    </List>
  );
}

const SKELETON_VARIANT = {
  clothes: {
    arrayLength: 9,
    className: 'grid-cols-3',
  },
  cosmetic: {
    arrayLength: 4,
    className: 'grid-cols-4',
  },
};
