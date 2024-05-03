import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  ApiUrl = "http://localhost:3000/employee"
  constructor(private http:HttpClient) { }

  
  getData(){
    return this.http.get(this.ApiUrl)
  }
  Delete(id: number) {
    return this.http.delete(`${this.ApiUrl}/${id}`)
  }
  AddPerson(data: any, Id = 0, isCreate:any): Observable<any> {
    if (isCreate) {
      
      return this.http.post(this.ApiUrl, data)
    } else {
      return this.http.put(`${this.ApiUrl}/${Id}`, data);
    }
  }
  getPersonById(id: string) {
    return this.http.get(`${this.ApiUrl}/${id}`);

  }
}
