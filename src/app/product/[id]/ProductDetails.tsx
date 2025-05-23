'use client';

import { useCart } from '@/lib/cart';
import Image from 'next/image';
import { useState } from 'react';
import { type Product } from '@/lib/db/schema';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

interface ProductDetailsProps {
  product: Product;
  relatedProducts: Product[];
}

export default function ProductDetails({ product, relatedProducts }: ProductDetailsProps) {
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isZoomed, setIsZoomed] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Combine main image with additional images
  const allImages = [product.image, ...(product.images || [])];

  const handleAddToCart = () => {
    addItem(product, quantity);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isZoomed) return;

    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setPosition({ x, y });
  };

  const handleZoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 0.5, 3));
    setIsZoomed(true);
  };

  const handleZoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 0.5, 1));
    if (zoomLevel <= 1.5) {
      setIsZoomed(false);
    }
  };

  const handleMouseLeave = () => {
    setIsZoomed(false);
    setZoomLevel(1);
  };

  const handlePreviousImage = () => {
    setCurrentImageIndex(prev => (prev === 0 ? allImages.length - 1 : prev - 1));
    setIsZoomed(false);
    setZoomLevel(1);
  };

  const handleNextImage = () => {
    setCurrentImageIndex(prev => (prev === allImages.length - 1 ? 0 : prev + 1));
    setIsZoomed(false);
    setZoomLevel(1);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Image Gallery */}
          <div className="space-y-4">
            <div className="relative">
              <div 
                className="relative aspect-square group cursor-zoom-in"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                <div className="absolute inset-0 overflow-hidden rounded-lg">
                  <Image
                    src={allImages[currentImageIndex]}
                    alt={`${product.name} - Image ${currentImageIndex + 1}`}
                    fill
                    className="object-cover transition-transform duration-300"
                    style={{
                      transform: isZoomed 
                        ? `scale(${zoomLevel}) translate(${position.x - 50}%, ${position.y - 50}%)`
                        : 'scale(1)',
                      transformOrigin: 'center',
                    }}
                  />
                </div>
                {allImages.length > 1 && (
                  <>
                    <button
                      onClick={handlePreviousImage}
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-colors"
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </button>
                    <button
                      onClick={handleNextImage}
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-colors"
                    >
                      <ChevronRight className="h-6 w-6" />
                    </button>
                  </>
                )}
              </div>
            </div>

            {/* Thumbnail Gallery */}
            {allImages.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-2">
                {allImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentImageIndex(index);
                      setIsZoomed(false);
                      setZoomLevel(1);
                    }}
                    className={`relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden ${
                      currentImageIndex === index ? 'ring-2 ring-indigo-500' : ''
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${product.name} thumbnail ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}

            <div className="flex justify-center gap-4">
              <button
                onClick={handleZoomOut}
                className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 transition-colors"
                disabled={zoomLevel <= 1}
              >
                Zoom Out
              </button>
              <button
                onClick={handleZoomIn}
                className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 transition-colors"
                disabled={zoomLevel >= 3}
              >
                Zoom In
              </button>
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
              <p className="mt-2 text-2xl text-gray-900">${Number(product.price).toFixed(2)}</p>
            </div>

            <div className="space-y-4">
              <div>
                <h2 className="text-lg font-medium text-gray-900">Description</h2>
                <p className="mt-2 text-gray-600">{product.description}</p>
              </div>

              <div>
                <h2 className="text-lg font-medium text-gray-900">Details</h2>
                <dl className="mt-2 space-y-2">
                  <div className="flex justify-between">
                    <dt className="text-gray-600">Category</dt>
                    <dd className="text-gray-900">{product.category}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-600">Age Range</dt>
                    <dd className="text-gray-900">{product.ageRange}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-600">Pieces</dt>
                    <dd className="text-gray-900">{product.pieces}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-600">Rating</dt>
                    <dd className="text-gray-900">{product.rating}/5</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-600">Reviews</dt>
                    <dd className="text-gray-900">{product.reviews}</dd>
                  </div>
                </dl>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <div className="flex items-center space-x-4">
                  <label htmlFor="quantity" className="text-sm font-medium text-gray-700">
                    Quantity
                  </label>
                  <select
                    id="quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    className="rounded-md border-gray-300 py-1.5 text-base leading-5 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                      <option key={num} value={num}>
                        {num}
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  onClick={handleAddToCart}
                  className="mt-6 w-full bg-indigo-600 text-white px-6 py-3 rounded-md font-medium hover:bg-indigo-700 transition-colors"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Customers Also Viewed Section */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Customers Also Viewed</h2>
            <div className="relative">
              <div className="overflow-x-auto pb-4">
                <div className="flex gap-6">
                  {relatedProducts.map((relatedProduct) => (
                    <Link
                      key={relatedProduct.id}
                      href={`/product/${relatedProduct.id}`}
                      className="group flex-shrink-0 w-64"
                    >
                      <div className="bg-white rounded-lg shadow-sm overflow-hidden transition-transform duration-300 group-hover:scale-105">
                        <div className="relative aspect-square">
                          <Image
                            src={relatedProduct.image}
                            alt={relatedProduct.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="text-lg font-medium text-gray-900 group-hover:text-indigo-600 transition-colors">
                            {relatedProduct.name}
                          </h3>
                          <p className="mt-1 text-lg font-medium text-gray-900">
                            ${Number(relatedProduct.price).toFixed(2)}
                          </p>
                          <div className="mt-2 flex items-center">
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <svg
                                  key={i}
                                  className={`h-4 w-4 ${
                                    i < Math.floor(Number(relatedProduct.rating))
                                      ? 'text-yellow-400'
                                      : 'text-gray-300'
                                  }`}
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                              ))}
                            </div>
                            <span className="ml-2 text-sm text-gray-500">
                              ({relatedProduct.reviews})
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 