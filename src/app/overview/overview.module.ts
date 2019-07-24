import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RoomModule } from './../shared/room/room.module';
import { OverviewComponent } from './overview.component';

@NgModule({
  declarations: [OverviewComponent],
  imports: [CommonModule, RoomModule],
  exports: [OverviewComponent]
})
export class OverviewModule {}
