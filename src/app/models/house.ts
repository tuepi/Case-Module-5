import {Category} from "./category";

export interface House {
  id? : string,
  name? : string,
  category? : Category,
  address? : string,
  bedroom? : string,
  bathroom? : string,
  description? : string,
  price? : string,
  owner? : string,
  status? : string,
}
