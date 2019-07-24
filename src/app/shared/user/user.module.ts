import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UserComponent } from './user.component';
import { UserFacade } from './user.facade';

@NgModule({
  declarations: [UserComponent],
  imports: [CommonModule],
  providers: [UserFacade],
  exports: [UserComponent]
})
export class UserModule {}
