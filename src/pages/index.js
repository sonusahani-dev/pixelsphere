import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import CategoryListing from '@/components/listing/CategoryListing';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`
        ${geistSans.className} ${geistMono.className}
        flex flex-col
        min-h-screen
        font-[family-name:var(--font-geist-sans)]
      `}
    >
      <header className="h-17 shadow-md flex items-center px-4 z-index-10 shadow-bottom-gray-500 dark:shadow-bottom-gray-800">
        <h1 className="text-xl font-semibold dark:text-gray-300">Pixisphere</h1>
      </header>

      <main className="flex-1 overflow-y-auto px-4 py-8 sm:px-8">
        <CategoryListing />
      </main>

      <footer className="h-16 flex items-center justify-center text-sm text-white border-t">
        © 2025 Pixisphere [Sonu Sahani]. All rights reserved.
      </footer>
    </div>
  );
}