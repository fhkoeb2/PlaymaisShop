'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, ShoppingCart, Heart } from 'lucide-react';
import SearchBar from './SearchBar';
import { useCart } from '@/lib/cart';
import { useWishlist } from '@/lib/wishlist';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { totalItems } = useCart();
  const { totalItems: wishlistItems } = useWishlist();

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-indigo-600">
              PlaymaisConstructions
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <SearchBar />
            <nav className="flex items-center gap-6">
              <Link 
                href="/products" 
                className="text-gray-600 hover:text-gray-900"
              >
                Products
              </Link>
              <Link 
                href="/about" 
                className="text-gray-600 hover:text-gray-900"
              >
                About
              </Link>
              <Link 
                href="/contact" 
                className="text-gray-600 hover:text-gray-900"
              >
                Contact
              </Link>
              <Link 
                href="/wishlist" 
                className="text-gray-600 hover:text-gray-900 relative"
              >
                <Heart className="h-6 w-6" />
                {wishlistItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {wishlistItems}
                  </span>
                )}
              </Link>
              <Link 
                href="/cart" 
                className="text-gray-600 hover:text-gray-900 relative"
              >
                <ShoppingCart className="h-6 w-6" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </Link>
            </nav>
          </div>

          <button
            className="md:hidden text-gray-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4">
            <SearchBar />
            <nav className="flex flex-col gap-4 mt-4">
              <Link
                href="/products"
                className="text-gray-600 hover:text-gray-900"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
              <Link
                href="/about"
                className="text-gray-600 hover:text-gray-900"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-gray-600 hover:text-gray-900"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/wishlist"
                className="text-gray-600 hover:text-gray-900 flex items-center gap-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <Heart className="h-6 w-6" />
                <span>Wishlist {wishlistItems > 0 && `(${wishlistItems})`}</span>
              </Link>
              <Link
                href="/cart"
                className="text-gray-600 hover:text-gray-900 flex items-center gap-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <ShoppingCart className="h-6 w-6" />
                <span>Cart {totalItems > 0 && `(${totalItems})`}</span>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
} 