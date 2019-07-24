import { InjectionToken } from '@angular/core';

export interface CheckIn {
  user: string;
  room: string;
}

export const CHECKIN_API_URL: InjectionToken<string> = new InjectionToken<
  string
>('CHECKIN_API_URL');
