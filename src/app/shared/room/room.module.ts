import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RoomComponent } from './room.component';

@NgModule({
  declarations: [RoomComponent],
  imports: [CommonModule],
  exports: [RoomComponent]
})
export class RoomModule {}
