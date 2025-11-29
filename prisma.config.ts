import { defineConfig } from '@prisma/config';
// Source - https://stackoverflow.com/a
// Posted by Amrita Pathak, modified by community. See post 'Timeline' for change history
// Retrieved 2025-11-23, License - CC BY-SA 4.0
import "dotenv/config";

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is missing in environment variables");
}

export default defineConfig({
  schema: './prisma/schema.prisma',
  datasource: {
    url: process.env.DATABASE_URL, // Now guaranteed to be a string
  },
});
