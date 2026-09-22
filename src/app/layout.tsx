import type { Metadata } from 'next';
import { bodoniModa, cormorantGaramond, dmSans, manrope, dmMono } from '@/lib/fonts';
import './globals.css';

export const metadata: Metadata = {
  title: 'Tania Vithayathil — Portfolio',
  description: 'Personal editorial portfolio of Tania Vithayathil — Electronics & Computer Science Engineer.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bodoniModa.variable} ${cormorantGaramond.variable} ${dmSans.variable} ${manrope.variable} ${dmMono.variable}`}
      style={{ backgroundColor: '#F6F1E8', color: '#241817' }}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,400..900;1,6..96,400..900&family=DM+Mono:ital,wght@0,300;0,400;0,500;1,400&family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="bg-canvas text-espresso antialiased"
        style={{
          backgroundColor: '#F6F1E8',
          color: '#241817',
          minHeight: '100svh',
          margin: 0,
          padding: 0,
        }}
      >
        {children}
      </body>
    </html>
  );
}
