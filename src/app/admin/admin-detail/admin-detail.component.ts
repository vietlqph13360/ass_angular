import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/types/Product';

@Component({
  selector: 'app-admin-detail',
  templateUrl: './admin-detail.component.html',
  styleUrls: ['./admin-detail.component.css']
})
export class AdminDetailComponent implements OnInit {
  id : string ;
  product : Product;
  constructor(
    private activateRoute: ActivatedRoute,
    private productService : ProductService
    ) {
    this.id = '';
    this.product = {
      _id : "" ,
      name : '' ,
      price : 0 ,
      description :"",
      image:'',
      category:''
    }
   }

  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.params['id'];
    this.productService.getProduct(this.id).subscribe((data) => {
      this.product = data ;
    });
  }

}
