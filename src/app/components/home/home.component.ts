import { Component } from '@angular/core';
import { NotificationService } from '../../services/notification/notification.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass',
})
export class HomeComponent {
  constructor(private notificationService: NotificationService) {}

  showNotification() {
    this.notificationService.showNotification(
      'This is a test notification',
      'black'
    );
  }
}
