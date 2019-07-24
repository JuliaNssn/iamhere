import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule as NgrxStoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { RoomEffects } from '../room/room.effects';
import { RoomService } from '../room/room.service';
import { UserEffects } from '../user/user.effects';
import { UserService } from '../user/user.service';
import { reducers } from './reducers';

@NgModule({
  imports: [
    NgrxStoreModule.forRoot(reducers, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    EffectsModule.forRoot([UserEffects, RoomEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: false
    })
  ],
  providers: [UserService, RoomService]
})
export class StoreModule {}
