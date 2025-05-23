import { PrismaClient } from '@prisma/client';
import { db, products } from '../src/lib/db';

async function main() {
  const prisma = new PrismaClient();

  try {
    console.log('Starting migration from Prisma to Drizzle...');

    // Get all products from Prisma
    const prismaProducts = await prisma.product.findMany();
    console.log(`Found ${prismaProducts.length} products in Prisma database`);

    // Insert products into Drizzle
    for (const product of prismaProducts) {
      await db.insert(products).values({
        id: product.id,
        name: product.name,
        description: product.description,
        price: product.price,
        image: product.image,
        images: product.images,
        category: product.category,
        rating: product.rating,
        reviews: product.reviews,
        inStock: product.inStock,
        pieces: product.pieces,
        ageRange: product.ageRange,
        relatedProducts: product.relatedProducts,
        createdAt: product.createdAt,
        updatedAt: product.updatedAt
      });
      console.log(`Migrated product: ${product.name}`);
    }

    console.log('Migration completed successfully!');
  } catch (error) {
    console.error('Error during migration:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  }); 