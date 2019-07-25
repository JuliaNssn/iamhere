import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule as NgrxStoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { CheckInEffects } from "../check-in/check-in.effects";
import { RoomEffects } from "../room/room.effects";
import { UserEffects } from "../user/user.effects";
import { reducers } from "./reducers";

@NgModule({
  imports: [
    NgrxStoreModule.forRoot(reducers, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    EffectsModule.forRoot([UserEffects, RoomEffects, CheckInEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: false
    })
  ]
})
export class StoreModule {}
