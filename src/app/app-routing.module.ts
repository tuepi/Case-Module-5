import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomepageComponent} from "./components/homepage/homepage.component";
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";
import {DetailComponent} from "./components/house/detail/detail.component";
import {FindAllComponent} from "./components/house/find-all/find-all.component";
import {CreateHouseComponent} from "./components/house/create-house/create-house.component";

const routes: Routes = [
  {
    path: '' ,
    component : HomepageComponent,
    children : [
      {
        path : '',
        component : FindAllComponent
      },
      {
        path : "detail/:id",
        component : DetailComponent
      },
      {
        path:'create',
        component:CreateHouseComponent
      }
    ]
  },
  {
    path: 'login' ,
    component : LoginComponent
  },
  {
    path: 'register' ,
    component : RegisterComponent
  },
  {
    path: 'detail' ,
    component : DetailComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
