import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
import { TypeCategories } from 'src/app/types/Categories';

@Component({
  selector: 'app-admin-categories',
  templateUrl: './admin-categories.component.html',
  styleUrls: ['./admin-categories.component.css']
})
export class AdminCategoriesComponent implements OnInit {
  Categories: TypeCategories[];
  constructor(private CategoriesService:CategoriesService) {
    this.Categories = []
  }

  onGetList(){
    this.CategoriesService.getCategories().subscribe(data =>{
        this.Categories = data;
    })
  }

  ngOnInit(): void {
    this.onGetList();
  }

  onRemove(_id:string){
      const confirmRemove = window.confirm("Bạn có muốn xóa không ?");
      if(confirmRemove && _id){
        this.CategoriesService.removeCategory(_id).subscribe(data =>{
          this.onGetList();
        })
      }
  }

}
