import { Component, OnInit } from '@angular/core';

import { User } from '../shared/user/user.model';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  users: User[];

  constructor() {}

  ngOnInit() {
    this.users = [
      {
        name: 'Jari Möllenbernd'
      },
      {
        name: 'Madita Schöner'
      },
      {
        name: 'Julia Nissen'
      },
      {
        name: 'Marco Klaassen'
      }
    ];
  }
}
