import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ActivityService } from '../../../../services/activity/activity.service';
import { NotificationService } from '../../../../services/notification/notification.service';

@Component({
  selector: 'app-treasure',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './treasure.component.html',
  styleUrl: './treasure.component.sass',
})
export class TreasureComponent implements OnInit {
  treasure_list: any;

  constructor(
    private activityService: ActivityService,
    private notificationService: NotificationService
  ) {}

  ngOnInit() {
    // this.getRoutineList();
    this.getTreasureList();
  }

  getTreasureList() {
    this.activityService.get_treasure_list().subscribe({
      next: (value) => {
        console.log(value);
        this.treasure_list = value.data.rows;
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
