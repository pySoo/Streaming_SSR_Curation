'use client';

import { usePathname, useRouter } from 'next/navigation';
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
    name: '북마크',
    path: PATH.LIKE,
  },
];

export default function Navigation({ children }: PropsWithChildren) {
  const pathname = usePathname();
  const { push } = useRouter();

  const onClickNavItem = (path: string) => {
    push(path);
  };

  return (
    <nav className='w-full fixed bottom-0 left-0 bg-white shadow-md'>
      <List className='max-w-[600px] h-[50px] flex-row justify-center mx-auto border-t-[1px] border-gray-200'>
        {children ?? (
          <>
            {NAV_LIST.map(({ name, path }) => {
              return (
                <List.Row
                  key={path}
                  className={`w-[50%] justify-center`}
                  onClick={() => onClickNavItem(path)}
                >
                  <Text
                    className={`font-medium p-2 cursor-pointer ${path === pathname ? 'text-[#1360D1] font-semibold' : 'text-gray-400'}`}
                  >
                    {name}
                  </Text>
                </List.Row>
              );
            })}
          </>
        )}
      </List>
    </nav>
  );
}
