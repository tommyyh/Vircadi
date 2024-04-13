import Nav from '@/components/Nav/Nav';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import '../globals.scss';
import Footer from '@/components/Footer/Footer';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import pick from 'lodash/pick';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900', '100'],
  variable: '--poppins',
});

export const metadata: Metadata = {
  title: 'Vircadi',
  description: 'Vircadi website',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const messages = useMessages();

  return (
    <html lang="en">
      <body className={`${poppins.className} ${poppins.variable}`}>
        <NextIntlClientProvider messages={messages}>
          <Nav />
        </NextIntlClientProvider>

        {children}

        <Footer />
      </body>
    </html>
  );
}
