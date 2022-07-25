import { Component, OnInit } from '@angular/core';
import {HouseService} from "../../services/house.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-top5-most-rented-house',
  templateUrl: './top5-most-rented-house.component.html',
  styleUrls: ['./top5-most-rented-house.component.css']
})
export class Top5MostRentedHouseComponent implements OnInit {

  houses :any = [];
  constructor(private houseService:HouseService,
              private router:Router) { }

  ngOnInit(): void {
    this.houseService.findHouseOrderTop5(this.houses).subscribe((data)=>{
      console.log(data);
      this.houses=data;
    })
  }

}
