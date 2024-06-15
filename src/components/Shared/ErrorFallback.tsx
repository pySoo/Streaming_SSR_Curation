import Link from 'next/link';
import { FallbackProps } from 'react-error-boundary';

import { PATH } from '@/constants/path';

export default function ErrorFallback({ resetErrorBoundary }: FallbackProps) {
  return (
    <div
      role='alert'
      className='pt-16 flex flex-col items-center justify-center gap-4 h-screen'
    >
      <p>문제가 발생했습니다</p>
      <div className='flex gap-4'>
        <Link href={PATH.ROOT}>
          <button
            onClick={resetErrorBoundary}
            className='w-[140px] p-2 flex justify-center items-center bg-[#FE6F0F] rounded-[20px] text-white'
          >
            메인으로 돌아가기
          </button>
        </Link>
        <button
          onClick={resetErrorBoundary}
          className='w-[140px] p-2 flex justify-center items-center bg-[#FE6F0F] rounded-[20px] text-white'
        >
          다시 시도
        </button>
      </div>
    </div>
  );
}
