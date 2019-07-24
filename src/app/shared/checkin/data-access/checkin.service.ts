import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { CheckIn, CHECKIN_API_URL } from './checkin.model';

@Injectable()
export class CheckinService {
  constructor(
    private httpClient: HttpClient,
    @Inject(CHECKIN_API_URL) private apiUrl: string
  ) {}

  checkIn(userAndRoom: CheckIn): void {
    this.httpClient.post(`${this.apiUrl}/checkin`, userAndRoom);
  }

  checkOut(userAndRoom: CheckIn): void {
    this.httpClient.post(`${this.apiUrl}/checkout`, userAndRoom);
  }
}
