import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm : FormGroup ;
  constructor(
    private authService :AuthService ,
    private router : Router ,
  ) {
    this.registerForm = new FormGroup ({
      name: new FormControl('',Validators.required),
      email: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required)
    })
   }

  ngOnInit(): void {
  }
  onSubmit(){
    const data = this.registerForm.value;
    this.authService.register(data).subscribe(data =>{
            this.router.navigateByUrl("/login");
            console.log(data);

    })


  }
}
