import { Component, OnInit } from '@angular/core';
import {Category} from "../../../models/category";
import {CategoryService} from "../../../services/category.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  categories: Category[] | any;
  value : any

  constructor(private categoryService : CategoryService) { }

  ngOnInit(): void {
    this.getAllCategories()
  }

  getAllCategories() {
    this.categoryService.findAllCategory().subscribe(data => {
      this.categories = data;
    }, error => {
      console.log(error);
    });
  }
}
