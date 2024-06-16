import { Component, OnInit } from '@angular/core';
import { ActivityService } from '../../../../services/activity/activity.service';
import { NotificationService } from '../../../../services/notification/notification.service';

@Component({
  selector: 'app-routine',
  standalone: true,
  imports: [],
  templateUrl: './routine.component.html',
  styleUrl: './routine.component.sass',
})
export class RoutineComponent implements OnInit {
  routine_list: any = [];
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
        console.log(value)
        this.routine_list = value.data.rows;
        this.notificationService.showNotification(value.message, 'gold', 2000);
      },
      error: (error) => {
        this.notificationService.showNotification(error.message, 'gold', 60000);
      },
      complete: () => console.log('complete'),
    });
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
