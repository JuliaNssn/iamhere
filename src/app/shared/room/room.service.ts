import { Observable, of } from 'rxjs';
import { Room } from './room.model';

export class RoomService {
  loadRooms(): Observable<Array<Room>> {
    return of([
      {
        name: 'Main',
        users: []
      }
    ]);
  }
}
