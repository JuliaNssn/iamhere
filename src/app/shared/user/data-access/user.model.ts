import { InjectionToken } from '@angular/core';

export interface User {
  name: string;
  avatarUrl?: string;
}

export const USER_API_URL: InjectionToken<string> = new InjectionToken<string>(
  'USER_API_URL'
);
