import { Injectable } from '@angular/core';
import { Person } from '../models/person.model';


@Injectable()
export class PeopleApiServiceMock {

  getEmployees(): Person[] {
    return [
      { id: 4, name: 'Tikva Cohen', email: 'tc@gmail.com', birthdate: new Date('1995-05-04') }
    ]
  }

  getCustomers(): Person[] {
    return [
      { id: 7, name: 'Moshe Lavi', email: 'ml@gmail.com', birthdate: new Date('2005-05-04') }]
  }

  constructor() {
    console.log('PeopleApiServiceMock created');
  }
}

@Injectable({
  providedIn: 'root'
})
export class PeopleApiService {

  getEmployees(): Person[] {
    return [
      { id: 1, name: 'John Cohen', email: 'jc@gmail.com', birthdate: new Date('1954-05-04') },
      { id: 2, name: 'Jane Doe', email: 'Jd@gmail.com', birthdate: new Date('1990-02-15') },
      { id: 3, name: 'David Levi', email: 'Dl@gmail.com', birthdate: new Date('1980-12-25') },
      { id: 4, name: 'Tikva Cohen', email: 'tc@gmail.com', birthdate: new Date('1995-05-04') }
    ]
  }

  getCustomers(): Person[] {
    return [
      { id: 5, name: 'Shimon Levi', email: 'sl@gmail.com', birthdate: new Date('1975-02-15') },
      { id: 6, name: 'Namma Dahan', email: 'Nd@gmail.com', birthdate: new Date('1980-12-25') },
      { id: 7, name: 'Moshe Lavi', email: 'ml@gmail.com', birthdate: new Date('2005-05-04') }]
  }

  constructor() {
    console.log('PeopleApiService created');
  }
}

