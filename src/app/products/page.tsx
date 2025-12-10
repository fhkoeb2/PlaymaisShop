import { Suspense } from 'react';
export const dynamic = 'force-dynamic';
import { getDb } from '@/lib/db';
import { products } from '@/lib/db/schema';
import ProductCard from '@/components/ProductCard';
import { Filter } from 'lucide-react';
import { eq, and, gte, lte, ilike, or } from 'drizzle-orm';

async function getProducts(category?: string, minPrice?: number, maxPrice?: number, search?: string) {
  const db = getDb();
  const conditions = [];

  if (category) {
    conditions.push(eq(products.category, category));
  }

  if (minPrice !== undefined) {
    conditions.push(gte(products.price, minPrice.toString()));
  }

  if (maxPrice !== undefined) {
    conditions.push(lte(products.price, maxPrice.toString()));
  }

  if (search) {
    conditions.push(
      or(
        ilike(products.name, `%${search}%`),
        ilike(products.description, `%${search}%`),
        ilike(products.category, `%${search}%`)
      )
    );
  }

  const whereClause = conditions.length > 0 ? and(...conditions) : undefined;

  return db.select().from(products).where(whereClause);
}


async function ProductsList({
  searchParams,
}: {
  searchParams: { category?: string; minPrice?: string; maxPrice?: string; search?: string };
}) {
  const category = searchParams.category;
  const minPrice = searchParams.minPrice ? parseFloat(searchParams.minPrice) : undefined;
  const maxPrice = searchParams.maxPrice ? parseFloat(searchParams.maxPrice) : undefined;
  const search = searchParams.search;

  const productsList = await getProducts(category, minPrice, maxPrice, search);

  if (productsList.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">No products found matching your criteria.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {productsList.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default async function ProductsPage(props: {
  searchParams: Promise<{ category?: string; minPrice?: string; maxPrice?: string; search?: string }>;
}) {
  const searchParams = await props.searchParams;
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar with filters */}
        <div className="w-full md:w-64 space-y-6">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <Filter className="h-5 w-5" />
            Filters
          </h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                Category
              </label>
              <select
                id="category"
                name="category"
                defaultValue={searchParams.category}
                className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
              >
                <option value="">All Categories</option>
                <option value="Castle">Castle</option>
                <option value="Space">Space</option>
                <option value="Dinosaur">Dinosaur</option>
                <option value="City">City</option>
                <option value="Pirate">Pirate</option>
                <option value="Ocean">Ocean</option>
                <option value="Animals">Animals</option>
                <option value="Fantasy">Fantasy</option>
                <option value="Transportation">Transportation</option>
                <option value="Nature">Nature</option>
                <option value="Historical">Historical</option>
                <option value="Sports">Sports</option>
              </select>
            </div>

            <div>
              <label htmlFor="minPrice" className="block text-sm font-medium text-gray-700">
                Min Price
              </label>
              <input
                type="number"
                id="minPrice"
                name="minPrice"
                defaultValue={searchParams.minPrice}
                min="0"
                step="0.01"
                className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
              />
            </div>

            <div>
              <label htmlFor="maxPrice" className="block text-sm font-medium text-gray-700">
                Max Price
              </label>
              <input
                type="number"
                id="maxPrice"
                name="maxPrice"
                defaultValue={searchParams.maxPrice}
                min="0"
                step="0.01"
                className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Apply Filters
            </button>
          </form>
        </div>

        {/* Product grid */}
        <div className="flex-1">
          <Suspense fallback={<div>Loading products...</div>}>
            <ProductsList searchParams={searchParams} />
          </Suspense>
        </div>
      </div>
    </div>
  );
} 