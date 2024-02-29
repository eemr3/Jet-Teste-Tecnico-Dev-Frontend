import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Client from '../components/client/Client';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Lista de Carros',
  description: 'Criado utilizando Next.js e TypeScript',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Client>{children}</Client>
      </body>
    </html>
  );
}
