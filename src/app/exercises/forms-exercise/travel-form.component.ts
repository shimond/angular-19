import { Component, inject } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-travel-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './travel-form.component.html'
})
export class TravelFormComponent {
  fb = inject(FormBuilder);

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
