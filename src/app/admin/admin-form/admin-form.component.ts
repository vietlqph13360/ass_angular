import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesService } from 'src/app/services/categories.service';
import { ProductService } from 'src/app/services/product.service';
import { TypeCategories } from 'src/app/types/Categories';

@Component({
  selector: 'app-admin-form',
  templateUrl: './admin-form.component.html',
  styleUrls: ['./admin-form.component.css']
})
export class AdminFormComponent implements OnInit {
  productForm : FormGroup;
  productId : string ;
  listCategories : TypeCategories[];
  constructor(
    private activeRoute : ActivatedRoute,
    private productService : ProductService ,
    private router: Router ,
    private CategoriesService : CategoriesService) {
    this.productForm = new FormGroup({
      name : new FormControl('',Validators.required),
      price: new FormControl('',Validators.required),
      description: new FormControl('',Validators.required),
      image: new FormControl('',Validators.required),
      category:new FormControl('',Validators.required)
    });
    this.productId = "0";
    this.listCategories = [];
   }

  ngOnInit(): void {
    this.productId = this.activeRoute.snapshot.params['id'];
    if(this.productId){
    this.productService.getProduct(this.productId).subscribe(data => {
      this.productForm.patchValue({
        name:data.name,
        price: data.price ,
        description: data.description
      });
    });
  }
  this.CategoriesService.getCategories().subscribe(data =>{
    this.listCategories = data;
})
  }
  onSubmit(){
    const submitData = this.productForm.value;

    if (this.productId !== "" && this.productId !== undefined) {
      return this.productService.updateProduct(this.productId, submitData).subscribe(data => {
        this.router.navigateByUrl('/admin');
      });
    }

    // 2. Call API (Cần định nghĩa service và router điều hướng)
    return this.productService.createProduct(submitData).subscribe((data) => {
      // 3. Sau khi API call thành công sẽ điều hướng về danh sách
      // this.router.navigate(['/admin', 'products']);
      this.router.navigateByUrl('/admin');
    })
  }
}
