import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class CounterApiService {

  async increment(value: number): Promise<number> {
    const delay = Math.random() > 0.5 ? 1500 : 500;
    console.log('CounterApiService parameter ' + value);
    await new Promise(resolve => setTimeout(resolve, delay));
    return value + 1;
  }

  async decrement(value: number): Promise<number> {
    const delay = Math.random() > 0.5 ? 1500 : 500;
    await new Promise(resolve => setTimeout(resolve, delay));
    return value - 1;
  }
}