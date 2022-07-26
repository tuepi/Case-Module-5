import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {House} from "../models/house";
import {User} from "../models/user";

// const API_URL = environment.apiUrl + "/users";

const API_URL = 'http://localhost:8080/users';
@Injectable({
  providedIn: 'root'
})
export class HouseService {

  constructor(private httpClient:HttpClient) { }

  save(house:House){
    return this.httpClient.post<House>(API_URL,house);

  }

  getAllByOwnerId(id : string): Observable<House> {
    return this.httpClient.get<House>(API_URL + '/find-houses-by-ownerId?owner_id=' + id);
  }

}
