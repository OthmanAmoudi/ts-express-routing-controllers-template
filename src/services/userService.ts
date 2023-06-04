import { Service } from 'typedi';
import { UsersRepo } from '../repository/userRepo';
import { CreateUserDto } from '../controllers/UserController';

@Service()
export class ExampleService {
  constructor(public injectedService: UsersRepo) {}

  public getData() {
    return this.injectedService.getDatabaseData();
  }

  public createUser(user: CreateUserDto) {
    return this.injectedService.insertUserToDB(user);
  }
  public getUsers() {
    return this.injectedService.getUsersObj();
  }

  public getSchools() {
    return this.injectedService.getUsersObj();
  }
}
