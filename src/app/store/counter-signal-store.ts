import { computed, inject } from '@angular/core';
import { patchState, signalStore, withState, withMethods, withComputed, withProps, withHooks } from '@ngrx/signals'
import { rxMethod } from '@ngrx/signals/rxjs-interop'
import { MyConsoleService } from '../services/my-console.service';
import { CounterApiService } from '../services/counter-api.service';
import { concatMap, delay, of, switchMap, tap } from 'rxjs';

export interface CounterState {
    value: number;
    isLoading: boolean;
}

const INIT_STATE: CounterState = { value: 0, isLoading: false };

export const CounterSignalStore = signalStore({ providedIn: 'root' },
    withState(INIT_STATE),
    withProps(store => ({
        _myConsole: inject(MyConsoleService),
        _counterApi: inject(CounterApiService)
    })),
    withMethods((store) => ({
        init: () => {
            console.log('My Store init');
        },
        increment: rxMethod<void>(p$ => p$.pipe(
            tap(() => patchState(store, { isLoading: true })),
            concatMap(() => store._counterApi.increment(store.value())),
            tap((newValue) => patchState(store, { value: newValue, isLoading: false })),
        )),
        // increment: async () => {
        //     patchState(store, { isLoading: true });
        //     store._myConsole.logIt('Logging from increment');
        //     const newCounterValue = await store._counterApi.increment(store.value());
        //     patchState(store, { value: newCounterValue, isLoading: false });
        // },
        decrement: async () => {
            patchState(store, { isLoading: true });
            store._myConsole.logIt('Logging from decrement');
            const newCounterValue = await store._counterApi.decrement(store.value());
            patchState(store, { value: newCounterValue, isLoading: false });
        },
    })),
    withComputed((store) => ({
        value2: computed(() => store.value() * 2)
    })),
    withHooks((store) => ({
        onInit: () => {
            store.init();
        },
        onDestroy: () => {

        }
    }))
);