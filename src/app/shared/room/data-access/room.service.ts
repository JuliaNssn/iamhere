import { Observable, of } from 'rxjs';
import { Room } from './room.model';

export class RoomService {
  loadRooms(): Observable<Array<Room>> {
    return of([
      {
        name: 'Main',
        users: [
          {
            name: 'Bat Man'
          },
          {
            name: 'Super Man'
          },
          {
            name: 'Iron Man'
          }
        ]
      },
      {
        name: 'Spree',
        users: [
          {
            name: 'Mad Man'
          }
        ]
      }
    ]);
  }
}
