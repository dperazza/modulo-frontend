import { HttpClient } from '@angular/common/http';
import { User } from './app.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
 //We inject the HttpClient using the Dependency Injection
@Injectable({providedIn:'root'})
export class AppService {
 
  baseURL: string = "http://localhost:3000/";
 
  constructor(private http: HttpClient) {
  }
 
  getPeople(): Observable<User[]> {
    console.log('getPeople '+this.baseURL + 'people')
    return this.http.get<User[]>(this.baseURL + 'people')
  }
 
  addPerson(person:User): Observable<any> {
    const headers = { 'content-type': 'application/json','Access-Control-Allow-Origin': '*'}  
    const body=JSON.stringify(person);
    console.log(body)
    return this.http.post(this.baseURL + 'create', body,{'headers':headers})
  }
 
}
 