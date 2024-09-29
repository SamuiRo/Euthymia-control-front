import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivityService } from '../../../../../../services/activity/activity.service';
import { NotificationService } from '../../../../../../services/notification/notification.service';

@Component({
  selector: 'app-activity-manager-add',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './activity-manager-add.component.html',
  styleUrl: './activity-manager-add.component.sass',
})
export class ActivityManagerAddComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private activityService: ActivityService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
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

  onSubmit(): void {
    if (this.form.valid) {
      const formData = this.form.value;

      // Тут ти можеш відправляти дані на сервер, наприклад через HTTP запит
      console.log('Form Data:', formData);
      this.activityService.add_new_activity(formData).subscribe({
        next: (value) => {
          console.log('Form Okay');
          this.notificationService.showNotification(
            value.message,
            'gold',
            60000,
            value.message_header
          );
          // Очищення форми після успішної відправки
          this.form.reset();
        },
        error: (error) => {
          console.log(error);
          this.notificationService.showNotification(
            error.message,
            'gold',
            60000,
            'Error'
          );
        },
        complete: () => console.log('complete'),
      });
    }
  }
}
