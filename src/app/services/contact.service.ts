import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import endpoints from '../resources/endpoints';
import { AuthService } from './auth.service';
import { Observable, map } from 'rxjs';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private http: HttpClient, private auth: AuthService) {}

  private mapper(response: any) {
    // console.log('response', response);
    return response.datas.map((contact: any) => {
      return Contact.fromJson(contact);
    });
  }

  private singleMapper(response: any) {
    return Contact.fromJson(response.datas);
  }

  getAll(): Observable<Contact[]> {
    return this.http
      .get(endpoints.contacts, {
        headers: this.auth.getHeaders(),
      })
      .pipe(map(this.mapper));
  }

  getById(id: number): Observable<Contact> {
    return this.http
      .get(endpoints.contact + id, {
        headers: this.auth.getHeaders(),
      })
      .pipe(map(this.singleMapper));
  }

  update(contact: Contact, newContact: Contact): Observable<Contact> {
    return this.http
      .put(endpoints.contacts + contact.id, newContact.asjson(), {
        headers: this.auth.getHeaders(),
      })
      .pipe(map(this.singleMapper));
  }

  filter(term: string): Observable<Contact[]> {
    return this.http
      .get(endpoints.contacts + '&nom=' + term /* + '&ville=' + term */, {
        headers: this.auth.getHeaders(),
      })
      .pipe(map(this.mapper));
  }
}
