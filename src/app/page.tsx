import Link from 'next/link';
export const dynamic = 'force-dynamic';
import Image from 'next/image';
import { getDb } from '@/lib/db';
import { products } from '@/lib/db/schema';
import ProductCard from '@/components/ProductCard';
import { Suspense } from 'react';
import { desc } from 'drizzle-orm';
import { Leaf, Award, Handshake, Factory } from 'lucide-react';

async function getFeaturedProducts() {
  const db = getDb();
  return db.select().from(products).orderBy(desc(products.rating)).limit(3);
}

function FeaturedProductsSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[1, 2, 3].map((i) => (
        <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
          <div className="h-48 bg-gray-200" />
          <div className="p-4">
            <div className="h-6 bg-gray-200 rounded w-3/4 mb-2" />
            <div className="h-4 bg-gray-200 rounded w-full mb-4" />
            <div className="flex justify-between items-center">
              <div className="h-6 bg-gray-200 rounded w-1/4" />
              <div className="h-6 bg-gray-200 rounded w-1/4" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

async function FeaturedProducts() {
  const featuredProducts = await getFeaturedProducts();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {featuredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-indigo-700 text-white">
        <div className="absolute inset-0">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=1600&auto=format&fit=crop&q=60"
              alt="Creative construction background"
              fill
              sizes="(max-width: 1920px) 100vw, 1920px"
              className="object-cover opacity-30"
              priority
              quality={75}
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>

        <div className="relative min-h-[400px] md:min-h-[500px] flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Build Your Imagination with Playmais
              </h1>
              <p className="text-xl mb-8">
                Discover the joy of construction with our premium Playmais products.
                Create, build, and bring your ideas to life with our versatile building materials.
              </p>
              <Link
                href="/products"
                className="inline-block bg-white text-indigo-700 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
              >
                Start Building
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Featured Products</h2>
            <p className="mt-4 text-lg text-gray-600">
              Explore our most popular Playmais construction sets
            </p>
          </div>

          <Suspense fallback={<FeaturedProductsSkeleton />}>
            <FeaturedProducts />
          </Suspense>

          <div className="text-center mt-12">
            <Link
              href="/products"
              className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-md font-medium hover:bg-indigo-700 transition-colors"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Company Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Eco-Friendly */}
            <div className="text-center p-6 rounded-lg bg-green-50">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                <Leaf className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Eco-Friendly</h3>
              <p className="text-gray-600">
                Our products are made from sustainable materials and biodegradable components
              </p>
            </div>

            {/* High Standards */}
            <div className="text-center p-6 rounded-lg bg-blue-50">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">High Standards</h3>
              <p className="text-gray-600">
                We maintain rigorous quality control and safety standards in all our products
              </p>
            </div>

            {/* Fair Partnerships */}
            <div className="text-center p-6 rounded-lg bg-purple-50">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 mb-4">
                <Handshake className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fair Partnerships</h3>
              <p className="text-gray-600">
                We work with suppliers who share our commitment to ethical business practices
              </p>
            </div>

            {/* Sustainable Production */}
            <div className="text-center p-6 rounded-lg bg-orange-50">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 mb-4">
                <Factory className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Sustainable Production</h3>
              <p className="text-gray-600">
                Our manufacturing processes minimize environmental impact and waste
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 