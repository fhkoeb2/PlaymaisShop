import { db } from '@/lib/db';
import { products } from '@/lib/db/schema';
import { eq } from 'drizzle-orm';

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
    image: "/images/products/dino.jpg",
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
  
  if (!db) {
    throw new Error('Database connection is not available');
  }

  // First, create all products without relatedProducts
  const createdProducts = await Promise.all(
    productData.map(async (product) => {
      const { relatedProducts, ...productData } = product;
      const result = await db.insert(products).values({
        ...productData,
        relatedProducts: [] // Initialize with empty array
      }).returning();
      return result[0];
    })
  );

  // Then, update each product with its relatedProducts
  for (let i = 0; i < productData.length; i++) {
    const product = productData[i];
    const createdProduct = createdProducts[i];
    
    // Map the related product names to their IDs
    const relatedProductIds = product.relatedProducts.map((_, index) => {
      // Since we're using 1-based indices in our seed data, subtract 1 to get the correct array index
      return createdProducts[index].id;
    });

    await db
      .update(products)
      .set({ relatedProducts: relatedProductIds })
      .where(eq(products.id, createdProduct.id));
  }
  
  console.log('Seeding finished.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  }); 