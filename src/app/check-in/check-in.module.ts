import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { UserModule } from '../shared/user/user.module';
import { CheckInComponent } from './check-in.component';

@NgModule({
  declarations: [CheckInComponent],
  imports: [CommonModule, MatButtonModule, UserModule],
  exports: [CheckInComponent]
})
export class CheckInModule {}
