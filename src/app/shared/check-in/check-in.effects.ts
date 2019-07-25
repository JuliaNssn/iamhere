import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, tap, withLatestFrom } from 'rxjs/operators';
import { CheckInActionTypes, checkInsLoaded } from './check-in.actions';
import { CheckInFacade } from './check-in.facade';
import { UserAndRoom } from './data-access/check-in.model';
import { CheckInService } from './data-access/check-in.service';

@Injectable()
export class CheckInEffects {
  checkIn$ = createEffect(
    () =>
      this.actions.pipe(
        ofType(CheckInActionTypes.CheckIn),
        tap((checkIn: UserAndRoom) => this.checkInService.checkIn(checkIn))
      ),
    { dispatch: false }
  );

  loadCheckIns$ = createEffect(() =>
    this.actions.pipe(
      ofType(CheckInActionTypes.LoadCheckIns),
      mergeMap(() =>
        this.checkInService.checkIns$.pipe(
          withLatestFrom(this.checkInFacade.checkIns$),
          map(([checkIn, checkIns]: [UserAndRoom, Array<UserAndRoom>]) =>
            checkInsLoaded({
              payload: { checkIns: [...checkIns, checkIn] }
            })
          )
        )
      )
    )
  );

  constructor(
    private actions: Actions,
    private checkInService: CheckInService,
    private checkInFacade: CheckInFacade
  ) {}
}
