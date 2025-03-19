import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import logo from '../logo.jpg'

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Abdullah Al Mamun - MERN Stack Developer',
  description: 'Portfolio website of Abdullah Al Mamun, an experienced MERN Stack Web Developer specializing in Next.js, React.js, Node.js, and MongoDB.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <link rel="icon" href={logo.src} type="image/png" />
    </html>
  );
}