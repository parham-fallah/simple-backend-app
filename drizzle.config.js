import { defineConfig } from 'drizzle-kit';
import { config } from './src/core/config/index.js';

export default defineConfig({
  out: './drizzle',
  schema: './src/core/database/schema.js',
  dialect: 'postgresql',
  dbCredentials: {
    url: config.database.url,
  },
});
