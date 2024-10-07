import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '../model/Person';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  private readonly apiUrl = "http://localhost:3000/persons";
  constructor(private http: HttpClient) { }
  getPersons(){
    return this.http.get<Person[]>(this.apiUrl);
  }
  createPerson(person: Person){
    return this.http.post<Person>(this.apiUrl, person);
  }
  update(id: number, person: Person) {
    console.log(person);
    return this.http.put<Person>(`${this.apiUrl}/${id}`, person);
  }
  findById(id: number) {
    return this.http.get<Person>(`${this.apiUrl}/${id}`);
  }
  delete(id: number) {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
