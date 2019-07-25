import { Component, Input } from '@angular/core';
import { User } from './user.model';
./data-access/user.model;

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  @Input()
  user: User;

  @Input()
  size: number;

  @Input()
  isBordered: boolean;
}
