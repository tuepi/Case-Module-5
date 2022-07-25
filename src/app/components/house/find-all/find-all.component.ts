import {Component, Input, OnInit} from '@angular/core';
import {House} from "../../../models/house";
import {HouseService} from "../../../services/house.service";
import {Router} from "@angular/router";
import {HomeService} from "../../../services/home.service";

@Component({
  selector: 'app-find-all',
  templateUrl: './find-all.component.html',
  styleUrls: ['./find-all.component.css']
})
export class FindAllComponent implements OnInit {

  id: any;

  houses : House[] | any;

  constructor(private homeService: HomeService,
              private router : Router) { }

  ngOnInit(): void {
    this.getAll()
  }

  getAll() {
    this.homeService.getAll().subscribe(result => {
      console.log(result.content)
      this.houses = result.content;
    }, error => {
      console.log("Lỗi");
    });
  }

}
