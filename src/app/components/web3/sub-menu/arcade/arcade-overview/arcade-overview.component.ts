import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { ActivityService } from '../../../../../services/activity/activity.service';

@Component({
  selector: 'app-arcade-overview',
  standalone: true,
  imports: [FormsModule, MarkdownModule],
  templateUrl: './arcade-overview.component.html',
  styleUrl: './arcade-overview.component.sass',
})
export class ArcadeOverviewComponent {
  activity_name: string = '';
  article_content: string = '';

  constructor(
    private route: ActivatedRoute,
    private ActivityService: ActivityService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.activity_name = params['activity']; // "+" перед params['id'] конвертує його в число
      // console.log(name); // Робіть тут, що завгодно з отриманим id
    });

    this.getArcadeOverview(this.activity_name);
  }

  getArcadeOverview(name: string) {
    this.ActivityService.get_arcade_overview(name).subscribe({
      next: (value) => {
        console.log(value);
        this.article_content = value.data.details.article_text;
      },
      error: (error) => alert(error.message),
      complete: () => console.log('complete'),
    });
  }
}
