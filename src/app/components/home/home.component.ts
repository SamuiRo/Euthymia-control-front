import { Component } from '@angular/core';
import { NotificationService } from '../../services/notification/notification.service';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NotificationComponent } from '../notification/notification.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, RouterModule, NotificationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass',
})
export class HomeComponent {
  constructor(private notificationService: NotificationService) {}

  showNotification() {
    this.notificationService.showNotification(
      'This is a test notification This is a test notification This is a test notification This is a test notification This is a test notification',
      'black'
    );
  }
}
