import { Container, Service } from 'typedi';
import { UsersRepo } from '../repository/userRepo';

@Service()
export class ExampleService {
  constructor(
    // because we annotated ExampleInjectedService with the @Service()
    // decorator TypeDI will automatically inject an instance of
    // ExampleInjectedService here when the ExampleService class is requested
    // from TypeDI.
    public injectedService: UsersRepo
  ) {}

  public getUsers() {
    return this.injectedService.getUsersFromDB();
  }

  public getSchools() {
    return this.injectedService.getUsersFromDB();
  }
}
