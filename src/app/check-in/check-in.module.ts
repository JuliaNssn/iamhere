import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CheckInComponent } from './check-in.component';

@NgModule({
  declarations: [CheckInComponent],
  imports: [CommonModule],
  exports: [CheckInComponent]
})
export class CheckInModule {}
