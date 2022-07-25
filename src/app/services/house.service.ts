import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {House} from "../models/house";
import {Observable} from "rxjs";
import {User} from "../models/user";
const API_URL = 'http://localhost:8080/houses';
@Injectable({
  providedIn: 'root'
})
export class HouseService {

  constructor(private httpClient:HttpClient) { }

  save(house:House){
    return this.httpClient.post<House>(API_URL,house);

  }

  findById(id: any) : Observable<House>{
    return this.httpClient.get<House>(API_URL + `/${id}`)
  }

  findHouseOrderTop5(house:House){
    return this.httpClient.get<House>(API_URL+"/by-price-top2")
  }
}
