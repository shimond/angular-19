import { inject, Injectable, signal } from "@angular/core";
import { PeopleApiService } from "../../services/people-api.service";
import { Person } from "../../models/person.model";

@Injectable({
    providedIn:'root'
})
export class PeoplePageStore {

    #peopleApiService = inject(PeopleApiService);

    #employees = signal<Person[]>([]);
    #customers = signal<Person[]>([]);

    employees = this.#employees.asReadonly();
    customers = this.#customers.asReadonly();

    
    init(){
        this.#peopleApiService.getEmployees().subscribe(employees => this.#employees.set(employees));
        this.#peopleApiService.getCustomers().subscribe(customers => this.#customers.set(customers));
    }

    deletePerson(person: Person){
        this.#peopleApiService.deletePerson(person.id).subscribe(() => {
            // refresh all
            // remove specific person from the list
            if(person.type == 'Employee')
            {
                this.#employees.update(list => list.filter(p => p.id != person.id));
            }
            else{
                this.#customers.update(list => list.filter(p => p.id != person.id));
            }
        });
    }


}