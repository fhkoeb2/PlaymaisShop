import type { Metadata } from "next";
import Link from 'next/link';
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { CartProvider } from '@/lib/cart';
import { WishlistProvider } from '@/lib/wishlist';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PlaymaisConstructions - Creative Building Fun",
  description: "Discover the joy of building with Playmais - where creativity meets construction",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <WishlistProvider>
            <Header />
            <main className="min-h-screen bg-gray-50">
              {children}
            </main>
          </WishlistProvider>
        </CartProvider>
        <footer className="bg-gray-800 text-white py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">PlaymaisConstructions</h3>
                <p className="text-gray-300">Where creativity meets construction.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><Link href="/" className="text-gray-300 hover:text-white">Home</Link></li>
                  <li><Link href="/products" className="text-gray-300 hover:text-white">Products</Link></li>
                  <li><Link href="/about" className="text-gray-300 hover:text-white">About</Link></li>
                  <li><Link href="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                <p className="text-gray-300">Email: info@playmaisconstructions.com</p>
                <p className="text-gray-300">Phone: (123) 456-7890</p>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
              <p>&copy; {new Date().getFullYear()} PlaymaisConstructions. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
} 