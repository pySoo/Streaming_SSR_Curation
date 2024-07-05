import Link from 'next/link';

import Button from '@/components/Shared/Button';
import PageLayout from '@/components/Shared/Layout/PageLayout';
import Stack from '@/components/Shared/Layout/Stack';
import Text from '@/components/Shared/Text';
import WeatherBackground from '@/components/Weather/Background/WeatherBackground';
import { PATH } from '@/constants/path';

export default function NotFoundPage() {
  return (
    <PageLayout background={<WeatherBackground />}>
      <Stack className='min-h-screen h-full items-center justify-center'>
        <Text variant='title'>존재하지 않는 페이지입니다</Text>
        <Link href={PATH.ROOT}>
          <Button>메인 화면으로 돌아가기</Button>
        </Link>
      </Stack>
    </PageLayout>
  );
}
