import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioButton } from '@angular/material/radio';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckbox } from '@angular/material/checkbox';
import { ActivityManagerAddComponent } from './modules/activity-manager-add/activity-manager-add.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-activity-manager',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    MatDatepickerModule,
    MatRadioButton,
    MatFormField,
    MatInputModule,
    MatNativeDateModule,
    MatCheckbox,
    ActivityManagerAddComponent,
    RouterModule
  ],
  templateUrl: './activity-manager.component.html',
  styleUrl: './activity-manager.component.sass',
})
export class ActivityManagerComponent {
  contactForm: FormGroup;
  isTBA: boolean = true;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required], // INPUT
      // email: ['', [Validators.required, Validators.email]],
      // message: ['', Validators.required],
      project: ['', Validators.required], // INPUT
      url: ['', Validators.required], // INPUT
      category: [''], // INPUT
      type: ['', Validators.required], // SELECT
      tier: ['', Validators.required], // NUMBER
      status: ['Active', Validators.required], // SELECT
      deadline: [{ value: 'TBA' }, Validators.required], // INPUT
      tags: [''], // TEXTAREA
      article_text: [''], // TEXT AREA
      description: [''], // TEXTAREA
      // dateOption: ['tba'],
      // date: [{ value: '', disabled: true }],
    });
  }

  onTBAToggle(event: any): void {
    this.isTBA = event.value;
    if (this.isTBA) {
      this.contactForm.get('deadline')?.disable();
    } else {
      this.contactForm.get('deadline')?.enable();
    }
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      const formData = this.contactForm.value;

      // Тут ти можеш відправляти дані на сервер, наприклад через HTTP запит
      console.log('Form Data:', formData);

      // Очищення форми після успішної відправки
      // this.contactForm.reset();
    }
  }
}
