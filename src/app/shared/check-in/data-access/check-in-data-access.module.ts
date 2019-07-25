import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import {
  CHECK_IN_SOURCE_API_URL,
  CHECK_IN_TRIGGER_API_URL
} from './check-in.model';
import { CheckInService } from './check-in.service';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [CheckInService]
})
export class CheckInDataAccessModule {
  static forRoot(
    triggerApiUrl: string,
    sourceApiUrl: string
  ): ModuleWithProviders {
    return {
      ngModule: CheckInDataAccessModule,
      providers: [
        CheckInService,
        {
          provide: CHECK_IN_TRIGGER_API_URL,
          useValue: triggerApiUrl
        },
        {
          provide: CHECK_IN_SOURCE_API_URL,
          useValue: sourceApiUrl
        }
      ]
    };
  }
}
