import {Role} from "./role";

export interface User {
  id?: string;
  username?: string;
  password?: string;
  confirmPassword?: string;
  roles?: [Role];
  enabled?: string;
}
