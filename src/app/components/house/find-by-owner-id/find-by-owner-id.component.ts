import { Component, OnInit } from '@angular/core';
import {House} from "../../../models/house";
import {HomeService} from "../../../services/home.service";
import {Router} from "@angular/router";
import {HouseService} from "../../../services/house.service";

@Component({
  selector: 'app-find-by-owner-id',
  templateUrl: './find-by-owner-id.component.html',
  styleUrls: ['./find-by-owner-id.component.css']
})
export class FindByOwnerIdComponent implements OnInit {

  id: any;
  houses : House[] | any;

  constructor(private houseService: HouseService,
              private router : Router) { }

  ngOnInit(): void {
    this.findHousesByOwnerId()
  }

  findHousesByOwnerId() {
    this.id = localStorage.getItem('USER_ID');
   this.houseService.getAllByOwnerId(this.id).subscribe(result => {
      this.houses = result;
    }, error => {
      console.log("Lỗi");
    });
  }

}
