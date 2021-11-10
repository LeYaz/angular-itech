import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Contact } from '../models/Contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http:HttpClient) { }

  addContact(contact:Contact):Observable<Contact>{
    return this.http.post<Contact>(environment.API.baseUrl+environment.API.endpoint.contact, contact);
  }
}
