import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { ActivityService } from '../../../../../services/activity/activity.service';

@Component({
  selector: 'app-activity-overview',
  standalone: true,
  imports: [FormsModule, MarkdownModule],
  templateUrl: './activity-overview.component.html',
  styleUrl: './activity-overview.component.sass',
})
export class ActivityOverviewComponent implements OnInit {
  activity_name: string = '';
  article_content: string = ""
  
  constructor(
    private route: ActivatedRoute,
    private ActivityService: ActivityService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.activity_name = params['activity']; // "+" перед params['id'] конвертує його в число
      // console.log(name); // Робіть тут, що завгодно з отриманим id
    });

    this.getActivityOverview(this.activity_name);

    // this
  }

  getActivityOverview(name: string) {
    this.ActivityService.get_activity_overview(name).subscribe({
      next: (value) => {
        this.article_content = value.details.article_text;
        console.log(value);
      },
      error: (error) => alert(error.message),
      complete: () => console.log('complete'),
    });
  }
}
