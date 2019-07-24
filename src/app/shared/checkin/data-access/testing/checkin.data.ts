import * as Factory from 'factory.ts';
import * as faker from 'faker';
import { UserAndRoom } from '../checkin.model';

export const userAndRoomFactory = Factory.Sync.makeFactory<UserAndRoom>({
  user: faker.internet.userName(),
  room: faker.random.word()
});
