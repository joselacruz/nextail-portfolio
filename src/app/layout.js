import { Inter } from 'next/font/google';
import Header from '@components/Header';
import '@styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Jose Lacruz',
  description:
    'I am José Lacruz, a passionate frontend developer with over 2 years of experience specializing in HTML, CSS, JavaScript and React.',
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
