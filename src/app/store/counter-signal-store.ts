import { patchState, signalStore, withState, withMethods } from '@ngrx/signals'

export interface CounterState {
    value: number;
}

const INIT_STATE: CounterState = { value: 0 };

export const CounterSignalStore = signalStore({ providedIn: 'root' },
    withState(INIT_STATE),
    withMethods((store) => {
        const f1 = () => { console.log('f1 invoked'); };
        const f2 = ()=> {
            f1();
            console.log('123');
        }
        return {
            myMethod: f1
        }
    }),
    withMethods((store) => ({
        increment: () => {
            patchState(store, { value: store.value() + 1 });
        },
        decrement: () => {
            patchState(store, { value: store.value() - 1 });
        },
    })));