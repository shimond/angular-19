import { inject, Injectable } from '@angular/core';
import { Person } from '../models/person.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleApiService {

  #baseUrl = 'http://localhost:3000';

  #httpClient = inject(HttpClient);

  getAll(): Observable<Person[]> {
    const url = `${this.#baseUrl}/users`;
    return this.#httpClient.get<Person[]>(url);
  }

  getEmployees(): Observable<Person[]> {
    const url = `${this.#baseUrl}/users?type=Employee`;
    return this.#httpClient.get<Person[]>(url);

  }

  getCustomers(): Observable<Person[]> {
    const url = `${this.#baseUrl}/users?type=Customer`;
    return this.#httpClient.get<Person[]>(url);
  }

  deletePerson(id: number): Observable<void> {
    const url = `${this.#baseUrl}/users/${id}`;
    return this.#httpClient.delete<void>(url);
  }

}

