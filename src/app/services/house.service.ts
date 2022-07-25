import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {House} from "../models/house";

const API_URL = environment.apiUrl + "/users";

@Injectable({
  providedIn: 'root'
})
export class HouseService {

  constructor(private httpClient : HttpClient) { }

  getAllByOwnerId(id : string): Observable<House> {
    return this.httpClient.get<House>(API_URL + '/find-houses-by-ownerId?owner_id=' + id);
  }

}
