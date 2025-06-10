import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'toMinHours', standalone: true })
export class ToMinHoursPipe implements PipeTransform {
  transform(value: number | null | undefined): string {
    if (value == null) return '';
    const hours = Math.floor(value / 60);
    const minutes = value % 60;
    return `${hours} hours and ${minutes} minutes`;
  }
}
