import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from './data-access/user.model';
import { loadUsers } from './user.actions';
import { UserState } from './user.reducer';
import { userQueries } from './user.selectors';

@Injectable({
  providedIn: 'root'
})
export class UserFacade {
  users$: Observable<Array<User>> = this.store.select(userQueries.getUsers);

  constructor(private store: Store<UserState>) {}

  loadUsers() {
    this.store.dispatch(loadUsers());
  }
}
