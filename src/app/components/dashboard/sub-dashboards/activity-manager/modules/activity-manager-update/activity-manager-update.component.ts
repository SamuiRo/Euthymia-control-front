import { Component, OnInit } from '@angular/core';
import { ActivityService } from '../../../../../../services/activity/activity.service';
import { NotificationService } from '../../../../../../services/notification/notification.service';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-activity-manager-update',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './activity-manager-update.component.html',
  styleUrl: './activity-manager-update.component.sass',
})
export class ActivityManagerUpdateComponent implements OnInit {
  activity_list: any;
  selected_activity: any;
  form: FormGroup;

  constructor(
    private activityService: ActivityService,
    private notificationService: NotificationService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      url: ['', Validators.required],
      category: [''],
      type: [''],
      tier: ['', Validators.required],
      status: ['Active', Validators.required],
      deadline: [''],
      tags: [''],
      article_text: [''],
      description: [''],
    });
    this.getTreasureList();
  }

  onSelect(item: any) {
    this.selected_activity = item;
    console.log(item);
    // Заповнюємо форму значеннями обраного елемента
    this.form.patchValue({
      url: item.url,
      category: item.category,
      // type: item.type,
      tier: item.tier,
      status: item.status,
      deadline: item.deadline,
      tags: item.tags,
      article_text: item.details.article_text,
      description: item.description,
    });
  }

  onSubmit(): void {
    console.log('Update');
    if (this.form.valid) {
      const formData = this.form.value;
      formData.name = this.selected_activity.name;
      formData.project = this.selected_activity.project;

      // Тут ти можеш відправляти дані на сервер, наприклад через HTTP запит
      console.log('Form Data:', formData);

      // console.log('Form Data:', formData);
      this.activityService.update_activity(formData).subscribe({
        next: (value) => {
          console.log('Form Okay');
          this.notificationService.showNotification(
            value.message,
            'gold',
            60000,
            value.message_header
          );
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

      // Очищення форми після успішної відправки
      // this.contactForm.reset();
    }
  }

  getTreasureList() {
    this.activityService.get_treasure_list().subscribe({
      next: (value) => {
        console.log(value);
        this.activity_list = value.data.rows;
        this.form.patchValue({ type: 'Treasure' });
        this.notificationService.showNotification(value.message, 'gold', 2000);
      },
      error: (error) => {
        this.notificationService.showNotification(error.message, 'gold', 60000);
      },
      complete: () => console.log('complete'),
    });
  }

  getArcadeList() {
    this.activityService.get_arcade_list().subscribe({
      next: (value) => {
        console.log(value);
        this.activity_list = value.data.rows;
        this.form.patchValue({ type: 'Arcade' });
        this.notificationService.showNotification(value.message, 'gold', 2000);
      },
      error: (error) => {
        this.notificationService.showNotification(error.message, 'gold', 60000);
      },
      complete: () => console.log('complete'),
    });
  }

  getTierClass(tier: number): string {
    switch (tier) {
      case 1:
        return 'tier-1';
      case 2:
        return 'tier-2';
      case 3:
        return 'tier-3';
      case 4:
        return 'tier-4';
      default:
        return 'default';
    }
  }
}
