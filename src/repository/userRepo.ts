import { Service } from 'typedi';

@Service()
export class UsersRepo {
  getUsersFromDB() {
    return [
      { id: 1, name: 'Othman', school: 'SEGi' },
      { id: 2, name: 'Ahmed', school: 'BDU' },
      { id: 3, name: 'Ali', school: 'KDU' },
    ];
  }

  getSchoolsFromDB() {
    return [
      { id: 21, school: 'SEGi' },
      { id: 32, school: 'BDU' },
      { id: 43, school: 'KDU' },
    ];
  }
}
