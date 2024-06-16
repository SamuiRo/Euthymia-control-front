import { Component } from '@angular/core';
import { UtilsService } from '../../../../services/utils/utils.service';
import { NotificationService } from '../../../../services/notification/notification.service';

@Component({
  selector: 'app-database-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './database-dashboard.component.html',
  styleUrl: './database-dashboard.component.sass',
})
export class DatabaseDashboardComponent {
  constructor(
    private utilsService: UtilsService,
    private notificationService: NotificationService
  ) {}

  DBSync() {}

  fullDBsync() {
    this.utilsService.fullDBSync().subscribe({
      next: (value) => {
        console.log(value);
        this.notificationService.showNotification(value.message);
      },
      error: (error) => {
        console.log(error);
        this.notificationService.showNotification(error.message);
      },
      complete: () => console.log('import complete'),
    });
  }

  importAccounts() {
    this.utilsService.importAccounts().subscribe({
      next: (value) => {
        console.log(value);
      },
      error: (error) => console.log(error),
      complete: () => console.log('import complete'),
    });
  }

  importActivity() {
    this.utilsService.importActivity().subscribe({
      next: (value) => {
        console.log(value);
      },
      error: (error) => console.log(error),
      complete: () => alert('import activity complete'),
    });
  }

  importRoutine() {
    this.utilsService.importRoutine().subscribe({
      next: (value) => {
        console.log(value);
      },
      error: (error) => console.log(error),
      complete: () => alert('import activity complete'),
    });
  }

  showNotification(message: string) {
    this.notificationService.showNotification(message, 'gold');
  }
}
