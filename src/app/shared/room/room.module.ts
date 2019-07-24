import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RoomComponent } from './room.component';
import { RoomFacade } from './room.facade';

@NgModule({
  declarations: [RoomComponent],
  imports: [CommonModule],
  providers: [RoomFacade],
  exports: [RoomComponent]
})
export class RoomModule {}
