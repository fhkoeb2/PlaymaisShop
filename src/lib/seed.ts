import 'dotenv/config';
import { getDb } from './db';
import { products } from './db/schema';
import { sql } from 'drizzle-orm';

const productData = [
  {
    name: "Playmais Castle Adventure Set",
    description: "Build your own medieval castle with this Playmais set. Includes castle walls, towers, and decorative elements.",
    price: "29.99",
    image: "/images/products/castle.jpg",
    images: ["/images/products/castle-1.jpg", "/images/products/castle-2.jpg"],
    category: "Castle",
    rating: "4.8",
    reviews: 124,
    inStock: true,
    pieces: 200,
    ageRange: "4-8",
    relatedProducts: [2, 3] // Space Station and Dinosaur World
  },
  {
    name: "Space Station Explorer",
    description: "Create an amazing space station with this Playmais set. Perfect for young astronauts.",
    price: "34.99",
    image: "/images/products/space.jpg",
    images: ["/images/products/space-1.jpg", "/images/products/space-2.jpg"],
    category: "Space",
    rating: "4.7",
    reviews: 98,
    inStock: true,
    pieces: 250,
    ageRange: "5-10",
    relatedProducts: [1, 3] // Castle Adventure and Dinosaur World
  },
  {
    name: "Dinosaur World",
    description: "Build a prehistoric landscape with dinosaurs and volcanoes. Educational and fun!",
    price: "39.99",
    image: "/images/products/dino.png",
    images: ["/images/products/dino-1.jpg", "/images/products/dino-2.jpg"],
    category: "Dinosaur",
    rating: "4.9",
    reviews: 156,
    inStock: true,
    pieces: 300,
    ageRange: "4-9",
    relatedProducts: [1, 2] // Castle Adventure and Space Station
  },
  {
    name: "City Center",
    description: "Create a bustling city with buildings, roads, and vehicles. Perfect for imaginative play.",
    price: "44.99",
    image: "/images/products/city.jpg",
    images: ["/images/products/city-1.jpg", "/images/products/city-2.jpg"],
    category: "City",
    rating: "4.6",
    reviews: 112,
    inStock: true,
    pieces: 350,
    ageRange: "5-12",
    relatedProducts: [1, 2] // Castle Adventure and Space Station
  },
  {
    name: "Pirate Ship",
    description: "Set sail on a pirate adventure with this detailed ship set. Includes ship, crew, and treasure.",
    price: "49.99",
    image: "/images/products/pirate.jpg",
    images: ["/images/products/pirate-1.jpg", "/images/products/pirate-2.jpg"],
    category: "Pirate",
    rating: "4.8",
    reviews: 89,
    inStock: true,
    pieces: 400,
    ageRange: "6-12",
    relatedProducts: [1, 3] // Castle Adventure and Dinosaur World
  }
];

async function main() {
  console.log('Start seeding...');
  const db = getDb();

  // First, create all products without relatedProducts
  for (const product of productData) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { relatedProducts, ...productWithoutRelated } = product;
    await db.insert(products).values({
      ...productWithoutRelated,
      relatedProducts: [] // Initialize with empty array
    });
  }

  // Then, update each product with its related products
  for (const product of productData) {
    if (product.relatedProducts && product.relatedProducts.length > 0) {
      // Find the related product IDs
      const relatedProductIds = await Promise.all(
        product.relatedProducts.map(async (name) => {
          const result = await db
            .select({ id: products.id })
            .from(products)
            .where(sql`${products.name} = ${name}`)
            .limit(1);
          return result[0]?.id;
        })
      );

      // Filter out any undefined IDs
      const validRelatedIds = relatedProductIds.filter((id): id is number => id !== undefined);

      // Update the product with the related product IDs
      await db
        .update(products)
        .set({ relatedProducts: validRelatedIds })
        .where(sql`${products.name} = ${product.name}`);
    }
  }

  console.log('Seeding finished.');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
}); 