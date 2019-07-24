import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { CHECK_IN_API_URL, UserAndRoom } from "./check-in.model";

@Injectable()
export class CheckInService {
  constructor(
    private httpClient: HttpClient,
    @Inject(CHECK_IN_API_URL) private apiUrl: string
  ) {}

  checkIn(userAndRoom: UserAndRoom): void {
    this.httpClient.post(`${this.apiUrl}/checkin`, userAndRoom);
  }

  checkOut(userAndRoom: UserAndRoom): void {
    this.httpClient.post(`${this.apiUrl}/checkout`, userAndRoom);
  }
}
