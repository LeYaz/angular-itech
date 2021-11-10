import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/Product';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  constructor(private http: HttpClient){}
  
  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>(environment.API.baseUrl + environment.API.endpoint.product);
  }
}
