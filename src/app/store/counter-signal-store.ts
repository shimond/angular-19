import { computed, inject } from '@angular/core';
import { patchState, signalStore, withState, withMethods, withComputed, withProps, withHooks } from '@ngrx/signals'
import { rxMethod } from '@ngrx/signals/rxjs-interop'
import { MyConsoleService } from '../services/my-console.service';
import { CounterApiService } from '../services/counter-api.service';
import { catchError, concatMap, delay, EMPTY, Observable, of, switchMap, tap } from 'rxjs';

export interface CounterState {
    value: number;
    isLoading: boolean;
    error: string | null;
}

const INIT_STATE: CounterState = { value: 0, isLoading: false, error: null };

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
        setValueOld: (newValue: number) => {
            patchState(store, { value: newValue });
        },
        setValue: rxMethod<number>((newValue$) => newValue$.pipe(
            tap(newVal => patchState(store, { value: newVal }))
        )),
        increment: rxMethod<void>(p$ => p$.pipe(
            tap(() => patchState(store, { isLoading: true })),
            switchMap(() => store._counterApi.increment(store.value()).pipe(tap((newValue) => {
                if (newValue == 7) {
                    throw new Error('Value is 7');
                }
            }),
                catchError((err) => {
                    patchState(store, {
                        isLoading: false,
                        error: err instanceof Error ? err.message : 'Unknown error',
                    });

                    return EMPTY;
                }))),
            tap((newValue) => patchState(store, { value: newValue, isLoading: false })),
        )),
        decrement: rxMethod<void>(p$ => p$.pipe(
            tap(() => patchState(store, { isLoading: true })),
            switchMap(() => store._counterApi.decrement(store.value())),
            tap((newValue) => patchState(store, { value: newValue, isLoading: false })),
        )),
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