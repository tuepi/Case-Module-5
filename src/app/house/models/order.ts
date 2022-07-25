import {User} from "../../models/user";
import {House} from "./house";

export interface Order {
  id?: string;
  house : House;
  customer : User;
  startTime?: string;
  endTime?: string;
  total?: string;
  status?: string;
}
