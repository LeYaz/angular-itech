import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Article } from '../models/Article';

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  constructor(private http: HttpClient) { }

  getPanier():Observable<Article[]>{
    return this.http.get<Article[]>(environment.API.baseUrl + environment.API.endpoint.panier);
  }

  addArticle(article: Article):Observable<Article>{
    return this.http.post<Article>(environment.API.baseUrl + environment.API.endpoint.panier, article);
  }

  removeArticle(id:number):Observable<Article>{
    return this.http.delete<Article>(environment.API.baseUrl + environment.API.endpoint.panier + '/' + id);
  }

  updateArticle(article:Article){
    return this.http.put<Article>(environment.API.baseUrl + environment.API.endpoint.panier + '/' + article.id, article);
  }
  
}
