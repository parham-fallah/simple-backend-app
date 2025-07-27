// schema.js
import { pgSchema, uuid, serial, varchar, text, timestamp } from 'drizzle-orm/pg-core';

// Create note schema
export const noteSchema = pgSchema('note');

// Users table
export const users = noteSchema.table('users', {
  id: uuid('id').primaryKey().defaultRandom(),
  email: varchar('email', { length: 256 }).notNull(),
  passwordHash: varchar('password_hash', { length: 512 }).notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
});

// Categories table
export const categories = noteSchema.table('categories', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 128 }).notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
});

// Notes table
export const notes = noteSchema.table('notes', {
  id: serial('id').primaryKey(),
  userId: uuid('user_id').notNull().references(() => users.id),
  categoryId: serial('category_id').notNull().references(() => categories.id),
  title: varchar('title', { length: 256 }).notNull(),
  content: text('content').notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
});
