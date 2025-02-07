import { Component, inject, signal, WritableSignal } from '@angular/core';
import { Person } from '../../models/person.model';
import { AbstractControl, FormBuilder, FormControl, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { MatInput } from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { JsonPipe } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
@Component({
  selector: 'app-upsert-person',
  imports: [ReactiveFormsModule, MatInput, MatFormFieldModule, MatButtonModule, JsonPipe, MatSelectModule, MatDatepickerModule],
  templateUrl: './upsert-person.component.html',
  styleUrl: './upsert-person.component.scss'
})
export class UpsertPersonComponent {

  personTypes = signal(['Employee', 'Customer', 'Admin']);
  emailError = signal<string>('');

  person: WritableSignal<Person> = signal({
    id: 90,
    name: 'Name of person',
    type: 'Employee',
    birthdate: new Date(),
    email: 'nameof@gmail.com'
  });

  personForm = inject(FormBuilder).group({
    id: new FormControl<number>(-1),
    name: new FormControl<string>('', [Validators.required]),
    type: new FormControl<'Employee' | 'Customer'>('Employee'),
    birthdate: new FormControl<Date>(new Date()),
    email: new FormControl<string>('', [Validators.required, Validators.email, this.startWithA])
  });

  constructor() {
    this.personForm.patchValue(this.person());
    this.personForm.controls.email.valueChanges.subscribe((value) => {
      this.emailError.set('');
      if (this.personForm.controls.email.invalid) {
        if (this.personForm.controls.email.hasError('required')) {
          this.emailError.set('Email is required');
        }
        if (this.personForm.controls.email.hasError('email')) {
          this.emailError.set('Email is invalid');
        }
        if (this.personForm.controls.email.hasError('startWithA')) {
          this.emailError.set('Start with not allowed.');
        }
      }
    });
  }

  startWithA(control: AbstractControl): ValidationErrors | null {
    if (!control.value) {
      return null;
    }

    if (control.value.toString().toLowerCase()[0] == 'a') {
      return {
        startWithA: { message: 'value start with A', currentValue: control.value }
      };
    }
    return null;
  }


  save() {
    const currentValue = this.personForm.value;
    this.person.set(currentValue as Person);
  }


}
