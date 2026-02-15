import { computed, inject } from '@angular/core';
import { patchState, signalStore, withState, withMethods, withComputed, withProps, withHooks } from '@ngrx/signals'
import { MyConsoleService } from '../services/my-console.service';

export interface CounterState {
    value: number;
}

const INIT_STATE: CounterState = { value: 0 };

export const CounterSignalStore = signalStore({ providedIn: 'root' },
    withState(INIT_STATE),
    withProps(store => ({
        _myConsole: inject(MyConsoleService)
    })),
    withMethods((store) => ({
        init: () => {
            console.log('My Store init');
        },
        increment: () => {
            store._myConsole.logIt('Logging from increment');
            patchState(store, { value: store.value() + 1 });
        },
        decrement: () => {
            store._myConsole.logIt('Logging from decrement');
            patchState(store, { value: store.value() - 1 });
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