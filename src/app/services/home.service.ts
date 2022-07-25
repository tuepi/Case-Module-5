import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {House} from "../models/house";
import {environment} from "../../environments/environment";

const API_URL = environment.apiUrl + "/homes";

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
