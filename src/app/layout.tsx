import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Perfil - LC',
  description: 'Perfil para mostrar/postar projetos React/Next',
  openGraph: {
    title: 'LC Page',
    images: [`${process.env.NEXT_PUBLIC_URL}/wallpaper.jpg`]
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
