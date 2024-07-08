import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import GoogleAnalytics from "@/components/analytics";

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
      <body className={inter.className}>
          {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ? (
            <GoogleAnalytics ga_id={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
          ) : <></>}
        {children}
      </body>
    </html>
  );
}
