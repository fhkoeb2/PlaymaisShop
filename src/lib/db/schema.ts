import { pgTable, serial, text, integer, boolean, decimal, timestamp } from 'drizzle-orm/pg-core';

export const products = pgTable('products', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  description: text('description').notNull(),
  price: decimal('price', { precision: 10, scale: 2 }).notNull(),
  image: text('image').notNull(),
  images: text('images').array().notNull(),
  category: text('category').notNull(),
  rating: decimal('rating', { precision: 3, scale: 1 }).notNull(),
  reviews: integer('reviews').notNull(),
  inStock: boolean('in_stock').notNull().default(true),
  pieces: integer('pieces').notNull(),
  ageRange: text('age_range').notNull(),
  relatedProducts: integer('related_products').array().notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull()
});

export type Product = typeof products.$inferSelect;
export type NewProduct = typeof products.$inferInsert; 