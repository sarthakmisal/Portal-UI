import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private base_url="http://[::1]:5500/";
  constructor(private http: HttpClient) { }

  getCategories() {
    return this.http.get(`${this.base_url}category/get`)
  }
  saveCategory(category:any){
    return this.http.post(`${this.base_url}category/create`,category)
  }
}
