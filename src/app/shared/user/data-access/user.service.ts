import { Observable, of } from 'rxjs';
import { User } from './user.model';

export class UserService {
  loadUser(): Observable<User[]> {
    return of([
      {
        name: 'Julia Nissen'
      }
    ]);
  }
}
