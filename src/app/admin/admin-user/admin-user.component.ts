import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { TypeUsers } from 'src/app/types/User';

@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.css']
})
export class AdminUserComponent implements OnInit {
  listUsers: TypeUsers[]
  constructor(
      private router:Router,
      private UsersService:UserService,
  ) {
    this.listUsers = [];
  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.UsersService.getUsers().subscribe(data =>{
        this.listUsers = data;
        console.log(this.listUsers);
    })
  }

  onDelete(_id:string){
    const confirmRemove = window.confirm("Bạn có muốn xóa không ?");
    if(confirmRemove && _id){
      this.UsersService.removeUser(_id).subscribe(data =>{
        this.getUsers();
      })
    }
  }
}
