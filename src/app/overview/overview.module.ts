import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

import { RoomModule } from './../shared/room/room.module';
import { OverviewComponent } from './overview.component';

@NgModule({
  declarations: [OverviewComponent],
  imports: [CommonModule, MatButtonModule, RoomModule, RouterModule],
  exports: [OverviewComponent]
})
export class OverviewModule {}
