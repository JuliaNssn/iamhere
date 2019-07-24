import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { CheckInComponent } from './check-in.component';

@NgModule({
  declarations: [CheckInComponent],
  imports: [CommonModule, MatButtonModule],
  exports: [CheckInComponent]
})
export class CheckInModule {}
