import { Component } from '@angular/core';
import { UtilsService } from '../../../../services/utils/utils.service';
import { NotificationService } from '../../../../services/notification/notification.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

export interface ButtonState {
  isConfirmed: boolean;
  isRequestInProgress: boolean;
  message: string;
}

@Component({
  selector: 'app-database-dashboard',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './database-dashboard.component.html',
  styleUrl: './database-dashboard.component.sass',
})
export class DatabaseDashboardComponent {
  buttonStates: any = {
    DBSync: {
      isConfirmed: false,
      isRequestInProgress: false,
      message: 'Confirm',
    },
    fullDBSync: {
      isConfirmed: false,
      isRequestInProgress: false,
      message: 'Confirm',
    },
    importAccounts: {
      isConfirmed: false,
      isRequestInProgress: false,
      message: 'Confirm',
    },
    importActivity: {
      isConfirmed: false,
      isRequestInProgress: false,
      message: 'Confirm',
    },
    importRoutine: {
      isConfirmed: false,
      isRequestInProgress: false,
      message: 'Confirm',
    },
    importTask: {
      isConfirmed: false,
      isRequestInProgress: false,
      message: 'Confirm',
    },
    importTreasure: {
      isConfirmed: false,
      isRequestInProgress: false,
      message: 'Confirm',
    },
    importArcade: {
      isConfirmed: false,
      isRequestInProgress: false,
      message: 'Confirm',
    },
  };

  constructor(
    private utilsService: UtilsService,
    private notificationService: NotificationService
  ) {}

  DBSync() {}

  fullDBSync() {
    const buttonState = this.buttonStates.fullDBSync;
    if (!buttonState.isConfirmed) {
      buttonState.isConfirmed = true;
      setTimeout(() => (buttonState.isConfirmed = false), 5000); // Автоматичне скасування підтвердження через 5 секунд
    } else {
      buttonState.isConfirmed = false;
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
  }

  importAccounts() {
    const buttonState = this.buttonStates.importAccounts;
    if (!buttonState.isConfirmed) {
      buttonState.isConfirmed = true;
      setTimeout(() => (buttonState.isConfirmed = false), 5000); // Автоматичне скасування підтвердження через 5 секунд
    } else {
      buttonState.isConfirmed = false;
      this.utilsService.importAccounts().subscribe({
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
  }

  importActivity() {
    const buttonState = this.buttonStates.importActivity;
    if (!buttonState.isConfirmed) {
      buttonState.isConfirmed = true;
      setTimeout(() => (buttonState.isConfirmed = false), 5000); // Автоматичне скасування підтвердження через 5 секунд
    } else {
      buttonState.isConfirmed = false;
      this.utilsService.importActivity().subscribe({
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
  }

  importRoutine() {
    const buttonState = this.buttonStates.importRoutine;
    if (!buttonState.isConfirmed) {
      buttonState.isConfirmed = true;
      setTimeout(() => (buttonState.isConfirmed = false), 5000); // Автоматичне скасування підтвердження через 5 секунд
    } else {
      buttonState.isConfirmed = false;
      this.utilsService.importRoutine().subscribe({
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
  }

  importTreasure() {
    const buttonState = this.buttonStates.importTreasure;
    if (!buttonState.isConfirmed) {
      buttonState.isConfirmed = true;
      setTimeout(() => (buttonState.isConfirmed = false), 5000); // Автоматичне скасування підтвердження через 5 секунд
    } else {
      buttonState.isConfirmed = false;
      this.utilsService.importTreasure().subscribe({
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
  }

  importArcade() {
    const buttonState = this.buttonStates.importArcade;
    if (!buttonState.isConfirmed) {
      buttonState.isConfirmed = true;
      setTimeout(() => (buttonState.isConfirmed = false), 5000); // Автоматичне скасування підтвердження через 5 секунд
    } else {
      buttonState.isConfirmed = false;
      this.utilsService.importArcade().subscribe({
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
  }

  showNotification(message: string) {
    this.notificationService.showNotification(message, 'gold');
  }
}
