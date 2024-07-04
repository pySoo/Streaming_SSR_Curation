import Link from 'next/link';
import { FallbackProps } from 'react-error-boundary';

import { PATH } from '@/constants/path';

import Button from './Button';
import Stack from './Layout/Stack';
import Text from './Text';

export default function ErrorFallback({ resetErrorBoundary }: FallbackProps) {
  return (
    <div
      role='alert'
      className='py-10 flex flex-col items-center justify-center gap-4'
    >
      <Text variant='title'>문제가 발생했습니다</Text>
      <Stack.Row className='gap-4'>
        <Link href={PATH.ROOT}>
          <Button>메인으로 돌아가기</Button>
        </Link>
        <Button onClick={resetErrorBoundary}>다시 시도</Button>
      </Stack.Row>
    </div>
  );
}
