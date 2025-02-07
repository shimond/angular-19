import { ApplicationConfig, Injectable, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';


import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { DateAdapter, MAT_DATE_LOCALE, MatDateFormats, NativeDateAdapter, provideNativeDateAdapter } from '@angular/material/core';




@Injectable({
  providedIn: 'root',
})
export class CustomDateAdapter extends NativeDateAdapter {

  override deserialize(value: any): Date | null {
    const date = super.deserialize(value);
    if (date) {
      date.setHours(12, 0, 0, 0); // Set time to 12:00 PM
    }
    return date;
  }

  override parse(value: any): Date | null {
    if (!value) return null;
    let date = super.parse(value);
    if (date) {
      date.setHours(12, 0, 0, 0); // Set time to 12:00 PM
    }
    return date;
  }
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideNativeDateAdapter(),
    { provide: DateAdapter, useClass: CustomDateAdapter },
    { provide: MAT_DATE_LOCALE, useValue: 'he-IL' },
    provideHttpClient(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes), provideAnimationsAsync()]
};
