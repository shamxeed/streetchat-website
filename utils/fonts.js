import { Geist, Geist_Mono, Poppins } from 'next/font/google';

// app/layout.js or utils/fonts.js

export const poppinsFont = Poppins({
  variable: '--font-poppins',
  weight: ['400', '700'], // Specify desired weights
  subsets: ['latin'],
  display: 'swap',
});

export const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

export const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});
