import { Component, OnInit } from '@angular/core';
import {House} from "../../../models/house";
import {HomeService} from "../../../services/home.service";
import {ActivatedRoute} from "@angular/router";
import {HouseService} from "../../../services/house.service";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  house : House | any;
  id : any;

  constructor(private homeService : HomeService,
              private activatedRoute : ActivatedRoute,
              private houseService:HouseService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((parammap) => {
      this.id = parammap.get('id');
      console.log(parammap)
      this.homeService.findById(this.id).subscribe(data => {
        console.log(data)
          this.house = data;
        },
        error => {
          console.log(error);
        });
    });
  }

}
