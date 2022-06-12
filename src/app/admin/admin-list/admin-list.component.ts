import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
import { ProductService } from 'src/app/services/product.service';
import { TypeCategories } from 'src/app/types/Categories';
import { Product } from 'src/app/types/Product';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css']
})
export class AdminListComponent implements OnInit {
  products: Product[];
  categories : TypeCategories[];
  constructor( private productService :ProductService,
    private CategoriesService: CategoriesService) {
    this.products = [];
    this.categories = []
  }

  ngOnInit(): void {
    this.onGetList();
  }
  onGetList(){
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    })
    this.CategoriesService.getCategories().subscribe(data =>{
      this.categories = data
    })
  }
  onDelete(_id : string){
    const confirmDelete = confirm ("Bạn có chắc muốn xóa không ");
    if(confirmDelete && _id){
      this.productService.deleteProduct(_id).subscribe((data) => {
        this.onGetList();
      })
    }
  }

}
