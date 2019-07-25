import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { checkIn, loadCheckIns } from './check-in.actions';
import { CheckInState } from './check-in.reducer';
import { checkInQueries } from './check-in.selector';
import { UserAndRoom } from './data-access/check-in.model';

@Injectable({
  providedIn: 'root'
})
export class CheckInFacade {
  checkIns$: Observable<Array<UserAndRoom>> = this.store.select(
    checkInQueries.getCheckIns
  );

  constructor(private store: Store<CheckInState>) {}

  loadCheckIns() {
    this.store.dispatch(loadCheckIns());
  }

  checkIn(name: string, room: string) {
    this.store.dispatch(checkIn({ payload: { userAndRoom: { name, room } } }));
  }
}
