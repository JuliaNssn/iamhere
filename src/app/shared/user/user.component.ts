import { Component, Input } from '@angular/core';
import { User } from './data-access/user.model';

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

  get avatarUrl(): string {
    return `https://via.placeholder.com/150/6FB5BF/FFFFFF/?text=${
      this.user.name
    }`;
  }
}
