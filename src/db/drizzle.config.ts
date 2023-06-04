import type { Config } from 'drizzle-kit';
import dotenv from 'dotenv';

dotenv.config();

export default {
  schema: './src/db/schema.ts',
  out: './drizzle',
  user: 'othman',
  host: 'localhost',
  database: 'callfood-stage-1', // public database
  password: process.env.DB_PASSWORD,
  port: 5432,
} satisfies Config;
