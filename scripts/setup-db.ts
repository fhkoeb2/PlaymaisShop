import { drizzle } from 'drizzle-orm/node-postgres';
import { migrate } from 'drizzle-orm/node-postgres/migrator';
import { Pool } from 'pg';
import { sql } from 'drizzle-orm';
import * as schema from '../src/lib/db/schema';

async function main() {
  const pool = new Pool({
    connectionString: 'postgresql://postgres:postgres@localhost:5432/playmais',
  });

  const db = drizzle(pool, { schema });

  console.log('Running migrations...');
  
  await db.execute(sql`
    CREATE TABLE IF NOT EXISTS products (
      id SERIAL PRIMARY KEY,
      name TEXT NOT NULL,
      description TEXT NOT NULL,
      price REAL NOT NULL,
      image TEXT NOT NULL,
      images TEXT[] NOT NULL,
      category TEXT NOT NULL,
      rating REAL NOT NULL,
      reviews INTEGER NOT NULL,
      in_stock BOOLEAN NOT NULL,
      pieces INTEGER NOT NULL,
      age_range TEXT NOT NULL,
      related_products INTEGER[] NOT NULL,
      created_at TIMESTAMP NOT NULL DEFAULT NOW(),
      updated_at TIMESTAMP NOT NULL DEFAULT NOW()
    );
  `);

  console.log('Migrations completed!');
  
  await pool.end();
}

main().catch((err) => {
  console.error('Migration failed!');
  console.error(err);
  process.exit(1);
}); 