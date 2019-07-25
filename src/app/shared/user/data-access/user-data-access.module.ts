import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { USER_API_URL } from './user.model';
import { UserService } from './user.service';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [UserService]
})
export class UserDataAccessModule {
  static forRoot(apiUrl: string): ModuleWithProviders {
    return {
      ngModule: UserDataAccessModule,
      providers: [
        UserService,
        {
          provide: USER_API_URL,
          useValue: apiUrl
        }
      ]
    };
  }
}
