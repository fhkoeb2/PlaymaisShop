This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Database Setup

The project uses PostgreSQL as its database. Follow these steps to set up the database:

1. Make sure PostgreSQL is installed and running on your system.

2. Create a `.env` file in the root directory with the following content:
```env
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/playmais?schema=public"
```

3. Create the database and set up the schema:
```bash
# Create the database
psql "postgresql://postgres:postgres@localhost:5432/postgres" -c "CREATE DATABASE playmais;"

# Create the Product table
psql "postgresql://postgres:postgres@localhost:5432/playmais" -c "CREATE TABLE IF NOT EXISTS \"Product\" (id SERIAL PRIMARY KEY, name VARCHAR(255) NOT NULL, description TEXT NOT NULL, price DECIMAL(10,2) NOT NULL, image VARCHAR(255) NOT NULL, images TEXT[] NOT NULL, category VARCHAR(255) NOT NULL, rating DECIMAL(3,1) NOT NULL, reviews INTEGER NOT NULL, \"inStock\" BOOLEAN NOT NULL, pieces INTEGER NOT NULL, \"ageRange\" VARCHAR(255) NOT NULL, \"relatedProducts\" INTEGER[] NOT NULL, \"createdAt\" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, \"updatedAt\" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP);"

# Insert sample products
psql "postgresql://postgres:postgres@localhost:5432/playmais" -c "INSERT INTO \"Product\" (name, description, price, image, images, category, rating, reviews, \"inStock\", pieces, \"ageRange\", \"relatedProducts\") VALUES ('Playmais Castle Adventure Set', 'Build your own medieval castle with this Playmais set. Includes castle walls, towers, and decorative elements.', 29.99, '/images/products/castle.jpg', ARRAY['/images/products/castle-1.jpg', '/images/products/castle-2.jpg'], 'Castle', 4.8, 124, true, 200, '4-8', ARRAY[2, 3]);"

psql "postgresql://postgres:postgres@localhost:5432/playmais" -c "INSERT INTO \"Product\" (name, description, price, image, images, category, rating, reviews, \"inStock\", pieces, \"ageRange\", \"relatedProducts\") VALUES ('Space Station Explorer', 'Create an amazing space station with this Playmais set. Perfect for young astronauts.', 34.99, '/images/products/space.jpg', ARRAY['/images/products/space-1.jpg', '/images/products/space-2.jpg'], 'Space', 4.7, 98, true, 250, '5-10', ARRAY[1, 3]);"

psql "postgresql://postgres:postgres@localhost:5432/playmais" -c "INSERT INTO \"Product\" (name, description, price, image, images, category, rating, reviews, \"inStock\", pieces, \"ageRange\", \"relatedProducts\") VALUES ('Dinosaur World', 'Build a prehistoric landscape with dinosaurs and volcanoes. Educational and fun!', 39.99, '/images/products/dino.jpg', ARRAY['/images/products/dino-1.jpg', '/images/products/dino-2.jpg'], 'Dinosaur', 4.9, 156, true, 300, '4-9', ARRAY[1, 2]);"

psql "postgresql://postgres:postgres@localhost:5432/playmais" -c "INSERT INTO \"Product\" (name, description, price, image, images, category, rating, reviews, \"inStock\", pieces, \"ageRange\", \"relatedProducts\") VALUES ('City Center', 'Create a bustling city with buildings, roads, and vehicles. Perfect for imaginative play.', 44.99, '/images/products/city.jpg', ARRAY['/images/products/city-1.jpg', '/images/products/city-2.jpg'], 'City', 4.6, 112, true, 350, '5-12', ARRAY[1, 2]);"

psql "postgresql://postgres:postgres@localhost:5432/playmais" -c "INSERT INTO \"Product\" (name, description, price, image, images, category, rating, reviews, \"inStock\", pieces, \"ageRange\", \"relatedProducts\") VALUES ('Pirate Ship', 'Set sail on a pirate adventure with this detailed ship set. Includes ship, crew, and treasure.', 49.99, '/images/products/pirate.jpg', ARRAY['/images/products/pirate-1.jpg', '/images/products/pirate-2.jpg'], 'Pirate', 4.8, 89, true, 400, '6-12', ARRAY[1, 3]);"
```

### Example Queries

Here are some example queries you can run to test the database:

1. Search products by name or description:
```sql
SELECT id, name, price, rating 
FROM "Product" 
WHERE name ILIKE '%castle%' OR description ILIKE '%castle%';
```

2. Filter products by price range and rating:
```sql
SELECT id, name, price, rating, reviews 
FROM "Product" 
WHERE price BETWEEN 30 AND 45 AND rating >= 4.7;
```

3. Get products by category with sorting:
```sql
SELECT id, name, price, rating, pieces 
FROM "Product" 
WHERE category = 'Space' 
ORDER BY price DESC;
```

4. Find products suitable for specific age range:
```sql
SELECT id, name, price, "ageRange", pieces 
FROM "Product" 
WHERE "ageRange" = '4-8' OR "ageRange" = '5-10' 
ORDER BY price;
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
