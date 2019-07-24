import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { UserFacade } from '../shared/user/user.facade';
import { User } from '../shared/user/user.model';

@Component({
  selector: 'app-check-in',
  templateUrl: './check-in.component.html',
  styleUrls: ['./check-in.component.sass']
})
export class CheckInComponent {
  users$: Observable<Array<User>> = this.facade.users$;

  constructor(private facade: UserFacade) {}
}
