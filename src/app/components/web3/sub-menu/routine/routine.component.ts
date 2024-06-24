import { Component, OnInit } from '@angular/core';
import { ActivityService } from '../../../../services/activity/activity.service';
import { NotificationService } from '../../../../services/notification/notification.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MarkdownModule } from 'ngx-markdown';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-routine',
  standalone: true,
  imports: [FormsModule, CommonModule, MarkdownModule, RouterModule],
  templateUrl: './routine.component.html',
  styleUrl: './routine.component.sass',
})
export class RoutineComponent implements OnInit {
  routine_list: any = {};
  markdownText: string = `
    # Заголовок 1
    **Жирний текст**
    * Курсив
    * Список
    1. Нумерований список
    [Посилання](https://example.com)
  `;

  constructor(
    private activityService: ActivityService,
    private notificationService: NotificationService
  ) {}

  ngOnInit() {
    this.getRoutineList();
  }

  getRoutineList() {
    this.activityService.get_routine_list().subscribe({
      next: (value) => {
        console.log(value);
        this.routine_list = value.data;
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

  getFaviconUrl(serviceUrl: string): string {
    try {
      const url = new URL(serviceUrl);

      return `${url.origin}/favicon.ico`;
    } catch (error) {
      console.error('Invalid URL', serviceUrl);
      return '';
    }
  }
}
