import { getDb } from '@/lib/db';
import { products } from '@/lib/db/schema';
import { eq, inArray } from 'drizzle-orm';
import { notFound } from 'next/navigation';
import ProductDetails from './ProductDetails';

export default async function ProductPage({ params }: { params: { id: string } }) {
  const db = getDb();
  const product = await db
    .select()
    .from(products)
    .where(eq(products.id, parseInt(params.id)))
    .limit(1)
    .then(rows => rows[0]);

  if (!product) {
    notFound();
  }

  // Fetch related products
  const relatedProducts = product.relatedProducts?.length
    ? await db
        .select()
        .from(products)
        .where(inArray(products.id, product.relatedProducts))
    : [];

  return <ProductDetails product={product} relatedProducts={relatedProducts || []} />;
} 