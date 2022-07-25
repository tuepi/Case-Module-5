import { Component, OnInit } from '@angular/core';
import {finalize, Observable} from "rxjs";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {FormControl, FormGroup} from "@angular/forms";
import {CategoryService} from "../../../services/category.service";
import {House} from "../../../models/house";
import {HouseService} from "../../../services/house.service";
import {Router} from "@angular/router";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-create-house',
  templateUrl: './create-house.component.html',
  styleUrls: ['./create-house.component.css']
})
export class CreateHouseComponent implements OnInit {
  title = "cloudsSorage";
  // @ts-ignore
  selectedFile: File = null;
  // @ts-ignore
  fb;
  // @ts-ignore
  downloadURL: Observable<string>;

  listCategory:any = [];
  createForm=new FormGroup({
    address:new FormControl(''),
    name:new FormControl(''),
    bathroom:new FormControl(''),
    bedroom:new FormControl(''),
    description:new FormControl(''),
    price:new FormControl(''),
    category:new FormControl(''),
    image:new FormControl('')



  })
  constructor(private storage: AngularFireStorage,
              private categoryService:CategoryService,
              private houseService:HouseService,
              private router:Router) {
  }

  ngOnInit() {
    this.findAllCategory()
  }

  findAllCategory(){
    this.categoryService.findAllCategory().subscribe((data)=>{
      console.log(data);
      this.listCategory=data;
    })
  }

  // @ts-ignore
  onFileSelected(event) {
    var n = Date.now();
    const file = event.target.files[0];
    const filePath = `RoomsImages/${n}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(`RoomsImages/${n}`, file);
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          this.downloadURL.subscribe(url => {
            if (url) {
              this.fb = url;
            }
            console.log(this.fb);
          });
        })
      )
      .subscribe(url => {
        if (url) {
          console.log(url);
        }
      });
  }

  private setNewHouse() {
    const house:House = {
      // @ts-ignore
      name:this.createForm.value.name,
      // @ts-ignore
      address:this.createForm.value.address,
      // @ts-ignore
      bathroom:this.createForm.value.bathroom,
      // @ts-ignore
      bedroom:this.createForm.value.bedroom,
      // @ts-ignore
      description:this.createForm.value.description,
      // @ts-ignore
      price:this.createForm.value.price,
      // @ts-ignore
      image:this.fb,
      // @ts-ignore
      category:{
        // @ts-ignore
        id:this.createForm.value.category
      },
      // @ts-ignore
      status:1,
      // @ts-ignore
      owner:{
        id: localStorage.getItem('USERID')
      }
    };
    return house;
  }

  saveHouse(){
    const house=this.setNewHouse()
    this.houseService.save(house).subscribe((data)=>{
      console.log(data);
      this.router.navigate(['/']);
    },error=>{
      console.log(error)
    })

    }
}
