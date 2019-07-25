import { User } from "../../user/data-access/user.model";

export interface Room {
  name: string;
  users: Array<User>;
}
