import { InjectionToken } from "@angular/core";

export interface UserAndRoom {
  name: string;
  room: string;
}

export const CHECK_IN_SOURCE_API_URL: InjectionToken<
  string
> = new InjectionToken<string>("CHECK_IN_SOURCE_API_URL");

export const CHECK_IN_TRIGGER_API_URL: InjectionToken<
  string
> = new InjectionToken<string>("CHECK_IN_TRIGGER_API_URL");
