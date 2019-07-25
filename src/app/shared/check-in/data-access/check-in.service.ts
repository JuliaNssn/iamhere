import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {
  CHECK_IN_SOURCE_API_URL,
  CHECK_IN_TRIGGER_API_URL,
  UserAndRoom
} from './check-in.model';

@Injectable()
export class CheckInService implements OnDestroy {
  private eventSource: EventSource;
  checkIns$: BehaviorSubject<UserAndRoom> = new BehaviorSubject(null);
  constructor(
    private httpClient: HttpClient,
    @Inject(CHECK_IN_TRIGGER_API_URL) private triggerApiUrl: string,
    @Inject(CHECK_IN_SOURCE_API_URL) private sourceApiUrl: string
  ) {
    this.eventSource = new EventSource(this.sourceApiUrl);
    this.eventSource.addEventListener('message', message => {
      this.checkIns$.next(JSON.parse(message.data));
    });
  }

  checkIn(userAndRoom: UserAndRoom): void {
    this.httpClient.post(`${this.triggerApiUrl}/checkin`, userAndRoom);
  }

  checkOut(userAndRoom: UserAndRoom): void {
    this.httpClient.post(`${this.triggerApiUrl}/checkout`, userAndRoom);
  }

  ngOnDestroy() {
    this.eventSource.close();
  }
}
