import { patchState, signalStore, withHooks, withMethods, withProps, withState } from "@ngrx/signals";
import { Person } from "../../models/person.model";
import { inject } from "@angular/core";
import { PeopleApiService } from "../../services/people-api.service";
import { rxMethod } from "@ngrx/signals/rxjs-interop";
import { switchMap, tap } from "rxjs";
import { tapResponse } from "@ngrx/operators";

export interface PeoplePageState {
    employees: Person[];
    customers: Person[];
    isLoading: boolean;
    error: string | null;
}

const INIT_STATE: PeoplePageState = {
    employees: [],
    customers: [],
    isLoading: false,
    error: null
}

export const PeoplePageSignalStore = signalStore({ providedIn: 'root' },
    withState(INIT_STATE),
    withProps(store => ({
        _api: inject(PeopleApiService)
    })),
    withMethods((store) => {
        const refreshMethod = rxMethod<void>(trigger$ => trigger$.pipe(
            tap(() => patchState(store, { isLoading: true })),
            switchMap(() => store._api.getAll().pipe()),
            tap(allUsers => {
                const employees = allUsers.filter(x => x.type == 'Employee');
                const customers = allUsers.filter(x => x.type == 'Customer');
                patchState(store, { employees, customers, isLoading: false });
            })
        ));
        return {
            refresh: refreshMethod,
            deletePerson: rxMethod<Person>(personToDelete$ => personToDelete$.pipe(
                tap(() => patchState(store, { isLoading: true, error: null })),
                switchMap(personToDelete => store._api.deletePerson(personToDelete.id).pipe(
                    tapResponse({
                        next: () => {
                            if (personToDelete.type == 'Employee') {
                                patchState(store, { isLoading: false, employees: store.employees().filter(o => o.id !== personToDelete.id) });
                            }
                            if (personToDelete.type == 'Customer') {
                                patchState(store, { isLoading: false, customers: store.customers().filter(o => o.id !== personToDelete.id) });
                            }
                        },
                        error: (err => {
                            patchState(store, { isLoading: false, error: err instanceof Error ? err.message : 'Failed to delete person', })
                        })
                    })
                ))
            )),
            updatePerson: rxMethod<Person>(personToUpdate$ => personToUpdate$.pipe(
                tap(() => patchState(store, { isLoading: true })),
                switchMap(personToUpdate => store._api.UpdatePerson(personToUpdate).pipe(
                    tap(() => refreshMethod())
                ))
            ))
        }
    }),
    withHooks((store) => ({
        onInit() {
            console.log('working from signal store');
            store.refresh();
        }
    }))

);