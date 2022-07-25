import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {House} from "../models/house";

const API_URL = 'http://localhost:8080/homes';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private httpClient : HttpClient) { }

  getAll(): Observable<any> {
    return this.httpClient.get<any>(API_URL);
  }

  findById(id: any) : Observable<House>{
    return this.httpClient.get<House>(API_URL + `/${id}`)
  }

}
