import Nav from '@/components/Nav/Nav';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import '../globals.scss';
import Footer from '@/components/Footer/Footer';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900', '100'],
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
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Nav />

        {children}

        <Footer />
      </body>
    </html>
  );
}
