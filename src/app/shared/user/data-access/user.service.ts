import { HttpClient } from '@angular/common/http';
import { Inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User, USER_API_URL } from './user.model';

export class UserService {
  private eventSource: EventSource;
  users$: BehaviorSubject<User> = new BehaviorSubject<User>(null);

  constructor(
    private httpClient: HttpClient,
    @Inject(USER_API_URL) private apiUrl: string
  ) {
    this.eventSource = new EventSource(apiUrl);
    this.eventSource.addEventListener('message', message =>
      this.users$.next(JSON.parse(message.data))
    );
  }
}
