'use client';

import { useWishlist } from '@/lib/wishlist';
import ProductCard from '@/components/ProductCard';
import { Heart } from 'lucide-react';

export default function WishlistPage() {
  const { items } = useWishlist();

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">My Wishlist</h1>
          <p className="mt-2 text-gray-600">
            Save your favorite Playmais products for later
          </p>
        </div>

        {items.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <Heart className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-sm font-medium text-gray-900">No items in wishlist</h3>
            <p className="mt-1 text-sm text-gray-500">
              Start adding some products to your wishlist!
            </p>
          </div>
        )}
      </div>
    </div>
  );
} 