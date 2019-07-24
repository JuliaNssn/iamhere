import { InjectionToken } from '@angular/core';

export interface UserAndRoom {
  user: string;
  room: string;
}

export const CHECK_IN_API_URL: InjectionToken<string> = new InjectionToken<
  string
>('CHECK_IN_API_URL');
