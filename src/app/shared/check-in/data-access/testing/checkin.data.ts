import * as Factory from "factory.ts";
import * as faker from "faker";
import { UserAndRoom } from "../check-in.model";

export const userAndRoomFactory = Factory.Sync.makeFactory<UserAndRoom>({
  user: faker.internet.userName(),
  room: faker.random.word()
});
