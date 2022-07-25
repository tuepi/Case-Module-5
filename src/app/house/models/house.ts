import {Category} from "./category";
import {User} from "../../models/user";

export interface House {
  id?: string;
  name?: string;
  category : Category;
  address?: string;
  bedroom?: string;
  bathroom?: string;
  description?: string;
  owner : User;
  status?: string;
}
