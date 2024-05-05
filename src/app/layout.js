import { Inter } from 'next/font/google';
import Header from '@components/Header';
import '@styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Portfolio',
  description: 'Create By Jose Lacruz',
  openGraph: {
    images: 'https://i.ibb.co/cFV8CFF/studio-image-2.jpg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
