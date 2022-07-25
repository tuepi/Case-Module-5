import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {House} from "../models/house";
const API_URL = 'http://localhost:8080'
@Injectable({
  providedIn: 'root'

})
export class HouseService {
  constructor(private httpClient: HttpClient) { }

  getAllHouse(): Observable<any> {
    return this.httpClient.get(API_URL + '/homes');
  }


}
