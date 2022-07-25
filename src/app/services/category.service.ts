import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
const API_URL = 'http://localhost:8080/categories';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient:HttpClient) { }

  findAllCategory(){
    return this.httpClient.get(API_URL);
  }


}
