import { Injectable } from '@angular/core';

import {Observable } from 'rxjs';
import {HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http : HttpClient) { }

  getAll() : Observable<any>{
    return this.http.get('https://www.google.com');
  }

  createRegister(register: Object): Observable<Object> {
    return this.http.post('https://www.google.com', register);
  }
}