import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TypeCategories } from '../types/Categories';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor( private http : HttpClient) { }
  getCategories():Observable<TypeCategories[]>{
    return this.http.get<TypeCategories[]>(environment.categories)
}

createCategory(data:TypeCategories):Observable<TypeCategories>{
  return this.http.post<TypeCategories>(`${environment.categories}`,data)
}

removeCategory(_id:string):Observable<TypeCategories>{
  return this.http.delete<TypeCategories>(`${environment.categories}/${_id}`)
}

editCategory(_id:string, data:TypeCategories): Observable<TypeCategories>{
  return this.http.put<TypeCategories>(`${environment.categories}/${_id}`,data);
}

getCategory(_id:string):Observable<TypeCategories>{
  return this.http.get<TypeCategories>(`${environment.categories}/${_id}`);
}
}
