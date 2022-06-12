import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TypeUsers } from '../types/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private http :HttpClient) { }
  getUsers():Observable<TypeUsers[]>{
    return this.http.get<TypeUsers[]>(environment.users);
}
removeUser(_id:string):Observable<TypeUsers>{
  return this.http.delete<TypeUsers>(`${environment.users}/${_id}`);
}
}
