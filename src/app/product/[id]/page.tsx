import { getDb } from '@/lib/db';
export const dynamic = 'force-dynamic';
import { products } from '@/lib/db/schema';
import { eq, inArray } from 'drizzle-orm';
import { notFound } from 'next/navigation';
import ProductDetails from './ProductDetails';

export default async function ProductPage(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
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