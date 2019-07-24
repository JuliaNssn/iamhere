import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { CHECKIN_API_URL } from './checkin.model';
import { CheckinService } from './checkin.service';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [CheckinService]
})
export class CheckinDataAccessModule {
  static forRoot(apiUrl: string): ModuleWithProviders {
    return {
      ngModule: CheckinDataAccessModule,
      providers: [
        CheckinService,
        {
          provide: CHECKIN_API_URL,
          useValue: apiUrl
        }
      ]
    };
  }
}
