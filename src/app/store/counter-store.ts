import { Injectable, signal } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class CounetStore {

    #value = signal(0);

    value = this.#value.asReadonly();


    increment() {
        this.#value.update(current => current + 1);
    }

    decrement() {
        this.#value.update(current => current - 1);
    }
}