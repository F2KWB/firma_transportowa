import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// IMPORTUJEMY TWOJE KOMPONENTY
import Header from "./components/naglowek"; 
import Footer from "./components/kontakt";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WANTRANZ - Transport i Spedycja",
  description: "Transport, spedycja krajowa i międzynarodowa. Solidność i doświadczenie.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body className={`${inter.className} min-h-screen bg-white antialiased`}>
        {/* MENU: Będzie teraz na każdej podstronie */}
        <Header />

        {/* TREŚĆ STRONY: Tutaj trafi page.tsx ze strony głównej LUB z folderu /kontakt */}
        {children}

        {/* STOPKA: Będzie teraz na każdej podstronie */}
        <Footer />
      </body>
    </html>
  );
}