import { Service } from 'typedi';
import { users } from '../db/schema';
import { db } from '../db';
import { eq } from 'drizzle-orm';
import { CreateUserDto } from '../controllers/UserController';
import { QueryResult } from 'pg';
import { InferModel } from 'drizzle-orm';

type NewUser = InferModel<typeof users, 'insert'>;

@Service()
export class UsersRepo {
  async getDatabaseData() {
    return await db.select().from(users).where(eq(users.id, 4));
  }

  async insertUserToDB(user: CreateUserDto) {
    const insertUser = async (user: NewUser) => db.insert(users).values(user);
    const newUser: NewUser = {
      name: user.name,
      email: user.email,
      password: user.password,
    };
    await insertUser(newUser);

    // const x = await db
    //   .insert(users)
    //   .values({
    //     name: user.name,
    //     email: user.email,
    //     password: user.password,
    //   })
    //   .returning();
    // console.log({ x });
    return newUser;
  }

  getUsersObj() {
    return [
      { id: 1, name: 'Othman', school: 'SEGi' },
      { id: 2, name: 'Ahmed', school: 'BDU' },
      { id: 3, name: 'Ali', school: 'KDU' },
    ];
  }

  getSchoolsObj() {
    return [
      { id: 21, school: 'SEGi' },
      { id: 32, school: 'BDU' },
      { id: 43, school: 'KDU' },
    ];
  }
}
