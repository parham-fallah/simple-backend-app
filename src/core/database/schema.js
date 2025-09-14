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

// Notes table
export const notes = noteSchema.table('notes', {
  id: serial('id').primaryKey(),
  userId: uuid('user_id').notNull().references(() => users.id),
  title: varchar('title', { length: 256 }).notNull(),
  content: text('content').notNull(),
  status: varchar('status', { length: 50 }).notNull().default('todo'), // e.g., 'todo', 'in-progress', 'done'
  createdAt: timestamp('created_at').notNull().defaultNow(),
});
