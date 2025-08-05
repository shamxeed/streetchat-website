import './globals.css';
import './app.css';

import { Toaster } from '@/components/ui/sonner';

import { geistSans, geistMono, poppinsFont } from '@/utils/fonts';
import { Header, Footer } from '../components/layouts';

export const metadata = {
  title: 'Streetchat | Home',
  description: 'Simple, Reliable and Fun way to meet new people!',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppinsFont.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />

        <Toaster
          toastOptions={{
            classNames: {
              title: '!text-white',
              toast: '!bg-gray-900',
              content: '!ml-2',
            },
          }}
        />
      </body>
    </html>
  );
}
