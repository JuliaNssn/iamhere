import { HttpClient } from '@angular/common/http';
import { Inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User, USER_API_URL } from './user.model';

export class UserService {
  constructor(
    private httpClient: HttpClient,
    @Inject(USER_API_URL) private apiUrl: string
  ) {}

  loadUser(): Observable<User[]> {
    return of([
      {
        name: 'Julia Nissen'
      }
    ]);
  }
}
