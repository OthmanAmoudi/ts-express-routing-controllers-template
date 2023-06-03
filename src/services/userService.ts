import { Service } from 'typedi';
import { UsersRepo } from '../repository/userRepo';

@Service()
export class ExampleService {
  constructor(public injectedService: UsersRepo) {}

  public getUsers() {
    return this.injectedService.getUsersFromDB();
  }

  public getSchools() {
    return this.injectedService.getUsersFromDB();
  }
}
