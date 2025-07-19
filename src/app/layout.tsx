import type { Metadata } from 'next';
import { Toaster } from "@/components/ui/toaster"
import './globals.css';

export const metadata: Metadata = {
  title: 'Absurdania RPG: Genesis',
  description: 'El juego donde el caos piensa y el absurdo tiene reglas',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Comic+Neue:wght@400;700&family=Luckiest+Guy&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body bg-[#111] text-gray-300 antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
