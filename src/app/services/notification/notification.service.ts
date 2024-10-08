import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Notification {
  message: string;
  type: 'gold' | 'black';
  message_header: string;
}

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private notificationsSubject = new BehaviorSubject<any>([]);
  public notifications$ = this.notificationsSubject.asObservable();

  constructor() {}

  showNotification(
    message: string,
    type: 'gold' | 'black' = 'black',
    timeout: number = 30000,
    message_header: string = 'Header'
  ) {
    const notifications = this.notificationsSubject.getValue();
    const newNotification: Notification = { message, type, message_header };
    this.notificationsSubject.next([...notifications, newNotification]);

    // Видалити сповіщення через 30 секунд
    setTimeout(() => {
      this.removeNotification(newNotification);
    }, timeout);
  }

  removeNotification(notification: Notification) {
    const notifications = this.notificationsSubject.getValue();
    const index = notifications.indexOf(notification);
    if (index >= 0) {
      notifications.splice(index, 1);
      this.notificationsSubject.next([...notifications]);
    }
  }
}
