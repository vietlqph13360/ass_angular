import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TypeLoginRequest, TypeLoginResponse, TypeRegister } from '../types/Auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http : HttpClient
  ) { }
  register(data:TypeRegister):Observable<TypeRegister>{
    return this.http.post<TypeRegister>(`${environment.register}`,data);
  }
  login(data:TypeLoginRequest):Observable<TypeLoginResponse>{
    return this.http.post<TypeLoginResponse>(`${environment.login}`,data);
  }
}
