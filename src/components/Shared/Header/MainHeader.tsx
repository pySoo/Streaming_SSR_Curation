import Link from 'next/link';

import { PATH } from '@/constants/path';

import Text from '../Text';

export default function MainHeader() {
  return (
    <Link href={PATH.ROOT}>
      <Text
        variant='subtitle'
        className='mb-0'
      >
        HEADER
      </Text>
    </Link>
  );
}
