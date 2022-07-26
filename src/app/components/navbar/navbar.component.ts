import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLogin = false;


  constructor() { }

  ngOnInit(): void {
    this.isLogin = localStorage.getItem('USERID') == null ? false : true;
  }

  logout() {
    localStorage.clear();
    this.isLogin = false;
  }

}
