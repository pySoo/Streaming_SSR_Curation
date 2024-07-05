import Stack from '../../Shared/Layout/Stack';
import Text from '../../Shared/Text';
import RecommendClothes from './RecommendClothes';

export default function ClothesCuration() {
  return (
    <Stack>
      <Text variant='title'>오늘 뭐입지?</Text>
      <RecommendClothes />
    </Stack>
  );
}
