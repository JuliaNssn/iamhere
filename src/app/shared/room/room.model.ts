import { User } from '../user/user.model';

export interface Room {
  name: string;
  users: Array<User>;
}
