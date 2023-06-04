import { pgTable, serial, text, timestamp, varchar } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 256 }),
  email: varchar('email', { length: 256 }).notNull(), // add unique constraints manually in pgadmin coz its not implemented in drizzle orm
  password: varchar('password', { length: 256 }),
  mobile_number: varchar('mobile_number', { length: 256 }),
  created_at: timestamp('created_at').defaultNow(),
  updated_at: timestamp('updated_at').defaultNow(), // add trigger to update this field automatically
});
