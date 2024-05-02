import { PropsWithChildren } from 'react';

export default function Header({ children }: PropsWithChildren) {
  return (
    <header className='max-w-[425px] z-10 h-[60px] flex items-center px-4 fixed top-0 left-[50%] translate-x-[-50%] bg-white w-full mx-auto border-b-[1px] border-gray-200'>
      {children}
    </header>
  );
}
