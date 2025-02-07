import { Component, signal } from '@angular/core';
import { Person } from '../../models/person.model';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInput } from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field';
import { debounce, debounceTime } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-upsert-person',
  imports: [ReactiveFormsModule, MatInput, MatFormFieldModule, MatButtonModule, JsonPipe],
  templateUrl: './upsert-person.component.html',
  styleUrl: './upsert-person.component.scss'
})
export class UpsertPersonComponent {
  person: Person = {
    id: 90,
    name: 'Name of person',
    type: 'Employee',
    birthdate: new Date(),
    email: 'nameof@gmail.com'
  };

  nameField = new FormControl<string>('', [Validators.required, Validators.minLength(4)]);
  constructor() {
    // this.nameField.disable
    //  this.nameField.reset()
    // this.nameField.errors
    
    
    this.nameField.valueChanges
    .pipe(debounceTime(250))
    .subscribe((value) => {
      console.log(`current name value = ${value}`);

    });
  }
  changeToEnable(){
    this.nameField.enable();
  }

  changeToDisable(){
    this.nameField.disable();
  }
}
