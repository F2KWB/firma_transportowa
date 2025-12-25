import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Standardowa czcionka
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nike Clone",
  description: "Projekt inspirowany Nike",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
 
      <body className={`${inter.className} min-h-screen bg-[#f5f5f5] antialiased`}>
        {children}
      </body>
    </html>
  );
}