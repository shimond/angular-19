import { Component, inject, signal } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule, AbstractControl, ValidationErrors } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-travel-form',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatButtonModule, MatInputModule,MatSelectModule],
  templateUrl: './travel-form.component.html',
  styleUrl: './travel-form.component.css'
})
export class TravelFormComponent {
  fb = inject(FormBuilder);
  countries = signal([
    'Israel', 'United States', 'Canada', 'United Kingdom', 'France', 'Germany', 'Italy', 'Spain', 'Australia', 'Japan', 'China', 'India', 'Brazil', 'Mexico', 'South Africa'
  ]);


  form = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    confirmEmail: ['', [Validators.required, Validators.email]],
    dest: ['', Validators.required],
    origin: ['', Validators.required],
    israelId: ['', [Validators.required, this.israelIdValidator]]
  }, { validators: this.matchEmail });

  submit(): void {
    if (this.form.valid) {
      alert(JSON.stringify(this.form.value));
    }
  }

  private matchEmail(group: AbstractControl): ValidationErrors | null {
    const email = group.get('email')?.value;
    const confirm = group.get('confirmEmail')?.value;
    return email === confirm ? null : { emailMismatch: true };
  }

  private israelIdValidator(control: AbstractControl): ValidationErrors | null {
    const id = control.value?.toString();
    if (!id || id.length > 9 || !/^[0-9]+$/.test(id)) return { invalidId: true };
    const padded = id.padStart(9, '0');
    const sum = padded.split('').reduce((acc: number, num: number, idx: number) => {
      let val = (+num) * ((idx % 2) + 1);
      if (val > 9) val -= 9;
      return acc + val;
    }, 0);
    return sum % 10 === 0 ? null : { invalidId: true };
  }
}
