import { headers } from 'next/headers';
import Link from 'next/link';
import { PropsWithChildren } from 'react';

import { PATH } from '@/constants/path';

import List from './Shared/Layout/List';
import Text from './Shared/Text';

const NAV_LIST = [
  {
    name: '맞춤 상품',
    path: PATH.ROOT,
  },
  {
    name: '상품 검색',
    path: PATH.SEARCH,
  },
  {
    name: '북마크',
    path: PATH.LIKE,
  },
];

export default function Navigation({ children }: PropsWithChildren) {
  const headersList = headers();
  const headerPathname = headersList.get('x-pathname') || '';

  return (
    <nav className='w-screen fixed bottom-0 left-0 bg-white shadow-md z-navigation'>
      <List className='max-w-tablet h-[50px] flex-row justify-center mx-auto border-t-[1px] border-gray-200'>
        {children ?? (
          <>
            {NAV_LIST.map(({ name, path }) => {
              return (
                <List.Row
                  key={path}
                  className={`w-[33%] justify-center`}
                >
                  <Link href={path}>
                    <Text
                      className={`font-medium p-2 cursor-pointer ${path === headerPathname ? 'text-highlight font-semibold' : 'text-gray-400'}`}
                    >
                      {name}
                    </Text>
                  </Link>
                </List.Row>
              );
            })}
          </>
        )}
      </List>
    </nav>
  );
}
