import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from './user.model';
import { UserState } from './user.reducer';
import { userQueries } from './user.selectors';

@Injectable()
export class UserFacade {
  users$: Observable<Array<User>> = this.store.select(userQueries.getUsers);

  constructor(private store: Store<UserState>) {}
}
