import { ButtonHTMLAttributes } from 'react';

import Button from '.';

export default function FixedBottomCTA({
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <div className='flex justify-center w-full fixed left-0 bottom-0 px-5'>
      <div className='w-full max-w-[425px] mx-auto pb-5 bg-white relative'>
        <div
          className='w-full bg-red-200 absolute left-0 top-[-40px] h-[40px]'
          style={{
            background:
              'linear-gradient(0deg,  rgba(255, 255, 255, 100),  rgba(255, 255, 255, 0)',
          }}
        />
        <Button
          data-testid='cta'
          className='w-full'
          {...props}
        />
      </div>
    </div>
  );
}
