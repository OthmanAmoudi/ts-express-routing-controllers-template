import { Service } from 'typedi';
import { PrismaClient, User } from '@prisma/client';

const prisma = new PrismaClient();

@Service()
export class UsersRepo {
  async getDatabaseData(): Promise<User | null> {
    const user = await prisma.user.findFirst({ where: { id: 1 } });
    console.log(user);
    return user;
    // return await db.select().from(users).where(eq(users.id, 4));
  }

  async insertUserToDB() {
    // return newUser;
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
