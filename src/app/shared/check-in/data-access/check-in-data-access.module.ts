import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { CHECK_IN_API_URL } from './check-in.model';
import { CheckInService } from './check-in.service';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [CheckInService]
})
export class CheckInDataAccessModule {
  static forRoot(apiUrl: string): ModuleWithProviders {
    return {
      ngModule: CheckInDataAccessModule,
      providers: [
        CheckInService,
        {
          provide: CHECK_IN_API_URL,
          useValue: apiUrl
        }
      ]
    };
  }
}
