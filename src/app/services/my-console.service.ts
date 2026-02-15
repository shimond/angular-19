import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class MyConsoleService {

    logIt(message: string) {
        console.log(`LOG:${message}`);
    }

}