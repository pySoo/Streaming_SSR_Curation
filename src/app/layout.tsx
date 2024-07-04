import './globals.css';

import ReactQueryProvider from '@/components/ReactQueryProvider';
import ToastProvider from '@/components/Shared/Toast/ToastProvider';

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
