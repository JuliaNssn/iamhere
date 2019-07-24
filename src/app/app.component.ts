import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { State } from './shared/store/reducers';
import { loadUsers } from './shared/user/user.actions';
import { User } from './shared/user/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  users$: Observable<Array<User>> = this.store.select(
    (state: State) => state.user.users
  );

  constructor(private store: Store<State>) {
    this.store.dispatch(loadUsers());
  }
}
