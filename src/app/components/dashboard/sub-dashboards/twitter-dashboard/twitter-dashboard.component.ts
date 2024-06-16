import { Component } from '@angular/core';
import { TwiterService } from '../../../../services/twitter/twiter.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-twitter-dashboard',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './twitter-dashboard.component.html',
  styleUrl: './twitter-dashboard.component.sass',
})
export class TwitterDashboardComponent {
  tweetContent: string = '';
  selectedTweetCategory: any = undefined;
  defaultOption: any = '';

  tweeterServiceList: any = [
    {url: "https://tweetscout.io/", name: "", desc: ""},
    {url: "https://www.hootsuite.com/social-media-tools/twitter-score-calculator", name: "", desc: ""},
  ]

  tweetsCategoryOptions: any = [
    { value: 'Forge', label: 'Forge' },
    { value: 'EarnAlliance', label: 'EarnAlliance' },
    { value: 'Mentions', label: 'Mentions' },
  ];

  constructor(private twiterService: TwiterService) {}

  getRandomTweetForCategory(category: string) {
    console.log(category);
    return this.twiterService.getRandomTweetForCategory(category).subscribe({
      next: (value) => (this.tweetContent = value),
      error: (error) => console.log(error),
      complete: () => console.log('complete'),
    });
  }
}
