import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-categories-form',
  templateUrl: './categories-form.component.html',
  styleUrls: ['./categories-form.component.css']
})
export class CategoriesFormComponent implements OnInit {

  CategoryForm: FormGroup
  CategoryId: string

  constructor(
    private CategoriesService:CategoriesService,
    private router:Router,
    private ActivatedRoute:ActivatedRoute
  ) {
      this.CategoryForm = new FormGroup({
        name: new FormControl('', [
          Validators.required,
          this.onValidateNameHasCategory
        ]),
      })
    this.CategoryId = ''
   }

  ngOnInit(): void {
    this.CategoryId = this.ActivatedRoute.snapshot.params['_id'];
    if(this.CategoryId){
        this.CategoriesService.getCategory(this.CategoryId).subscribe(data =>{
          console.log(data);
          this.CategoryForm.patchValue({
              name:data.name,
          });
        })
    }
  }

  onValidateNameHasCategory(control: AbstractControl): ValidationErrors|null{
    const inputValue = control.value;
    if(!inputValue.includes('Sách')){
      return {HasCategoryError: true}
    }
    return null;
  }


  onSubmit(){
    const data = this.CategoryForm.value;

    if(this.CategoryId !== "" && this.CategoryId !== undefined){
      return this.CategoriesService.editCategory(this.CategoryId,data).subscribe(data =>{
        this.router.navigateByUrl('/admin/categories');
      })
    }

    return this.CategoriesService.createCategory(data).subscribe(data =>{
      this.router.navigateByUrl('/admin/categories');
    })
  }

}
