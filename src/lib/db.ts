import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './db/schema';

// Check if we're running on the server side
const isServer = typeof window === 'undefined';

// Only create the connection on the server side
const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error('DATABASE_URL is not set');
}

let dbInstance: ReturnType<typeof drizzle> | null = null;

if (isServer) {
  const client = postgres(connectionString);
  dbInstance = drizzle(client, { schema });
}

// Export a function to get the database instance
export function getDb() {
  if (!isServer) {
    throw new Error('Database can only be accessed on the server side');
  }
  if (!dbInstance) {
    throw new Error('Database connection is not available');
  }
  return dbInstance;
}

export { schema }; 