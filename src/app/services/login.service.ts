import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  apiUrl="http://localhost:3000/signUp"
  constructor(private http:HttpClient) { }
  
 getLogin(){
  return this.http.get(this.apiUrl)
 }
}
