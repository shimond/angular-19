import { Injectable } from "@angular/core";
import { delay, Observable, of, Subject } from "rxjs";

@Injectable({ providedIn: 'root' })
export class CounterApiService {

  increment(value: number): Observable<number> {
    const delayTimeout = Math.random() > 0.5 ? 1500 : 500;
    console.log('CounterApiService parameter ' + value);
    return of(value + 1).pipe(delay(delayTimeout));
  }

  decrement(value: number): Observable<number> {
    const delayTimeout = Math.random() > 0.5 ? 1500 : 500;
    console.log('CounterApiService parameter ' + value);
    return of(value - 1).pipe(delay(delayTimeout));
  }

}