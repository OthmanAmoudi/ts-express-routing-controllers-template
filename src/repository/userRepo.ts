import { Service } from 'typedi';
import { CreateUserDto } from '../controllers/UserController';

@Service()
export class UsersRepo {
  async getDatabaseData() {
    // return await db.select().from(users).where(eq(users.id, 4));
  }

  async insertUserToDB(user: CreateUserDto) {
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
