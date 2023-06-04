import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export async function initDB() {
  try {
    await pool.connect();
    console.log('🟢 connected to database successfully 💾');
  } catch (err) {
    console.error('🔴 DB connection failed');
    console.error(err);
    throw err;
  }
}

export const db = drizzle(pool, { logger: true });
