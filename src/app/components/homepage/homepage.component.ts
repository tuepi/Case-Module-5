import { Component, OnInit } from '@angular/core';
import {House} from "../../models/house";
import {HomeService} from "../../services/home.service";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
