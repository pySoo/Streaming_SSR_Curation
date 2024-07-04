import './globals.css';

import ReactQueryProvider from '@/components/ReactQueryProvider';
import ToastProvider from '@/components/Shared/Toast/ToastProvider';

export const metadata = {
  title: 'Weather Curation ☀️',
  description:
    '기온에 맞는 옷과 주간 날씨 특징에 따른 상품을 추천하는 큐레이션 서비스입니다.',
  metadataBase: new URL('https://weather-curation-streamiing.vercel.app'),
  openGraph: {
    title: 'Weather Curation ☀️',
    description:
      '기온에 맞는 옷과 주간 날씨 특징에 따른 상품을 추천하는 큐레이션 서비스입니다.',
    url: 'https://weather-curation-streamiing.vercel.app',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ko'>
      <body suppressHydrationWarning={true}>
        <ReactQueryProvider>
          {children}
          <ToastProvider />
        </ReactQueryProvider>
      </body>
    </html>
  );
}
