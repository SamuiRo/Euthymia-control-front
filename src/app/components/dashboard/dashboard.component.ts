import { Component } from '@angular/core';
import { UtilsService } from '../../services/utils/utils.service';
import { TwiterService } from '../../services/twitter/twiter.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.sass',
})
export class DashboardComponent {
  tweetContent: string = '';
  selectedTweetCategory: any;
  defaultOption: any = '';

  tweetsCategoryOptions: any = [
    { value: 'Forge', label: 'Forge' },
    { value: 'EarnAlliance', label: 'EarnAlliance' },
    { value: 'Mentions', label: 'Mentions' },
  ];

  constructor(
    private utilsService: UtilsService,
    private twiterService: TwiterService
  ) {}

  ngOnInit() {
    this.defaultOption = 'placeholder'; // Встановіть значення за замовчуванням на placeholder
  }

  DBSync() {
    this.utilsService.DBSync().subscribe({
      next: (value) => console.log(value),
      error: (error) => console.log(error),
      complete: () => console.log('complete'),
    });
  }

  fullDBSync() {
    this.utilsService.fullDBSync().subscribe({
      next: (value) => console.log(value),
      error: (error) => console.log(error),
      complete: () => console.log('complete'),
    });
  }

  getRandomTweetForCategory(category: string) {
    console.log(category);
    return this.twiterService.getRandomTweetForCategory(category).subscribe({
      next: (value) => (this.tweetContent = value),
      error: (error) => console.log(error),
      complete: () => console.log('complete'),
    });
  }
}
