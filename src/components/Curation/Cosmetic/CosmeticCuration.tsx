import Stack from '../../Shared/Layout/Stack';
import Text from '../../Shared/Text';
import RecommendCosmetic from './RecommendCosmetic';

export default function CosmeticCuration() {
  return (
    <Stack>
      <Text variant='title'>일주일간 날씨 특징</Text>
      <RecommendCosmetic />
    </Stack>
  );
}
