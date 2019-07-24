import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { CHECKIN_API_URL, UserAndRoom } from "./checkin.model";

@Injectable()
export class CheckinService {
  constructor(
    private httpClient: HttpClient,
    @Inject(CHECKIN_API_URL) private apiUrl: string
  ) {}

  checkIn(userAndRoom: UserAndRoom): void {
    this.httpClient.post(`${this.apiUrl}/checkin`, userAndRoom);
  }

  checkOut(userAndRoom: UserAndRoom): void {
    this.httpClient.post(`${this.apiUrl}/checkout`, userAndRoom);
  }
}
