import { Bodoni_Moda, Cormorant_Garamond, DM_Sans, Manrope, DM_Mono } from 'next/font/google';

export const bodoniModa = Bodoni_Moda({
  subsets: ['latin'],
  variable: '--font-bodoni-moda',
  display: 'swap',
  style: ['normal', 'italic'],
});

export const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant-garamond',
  display: 'swap',
});

export const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
});

export const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
});

export const dmMono = DM_Mono({
  weight: ['300', '400', '500'],
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-dm-mono',
  display: 'swap',
});
