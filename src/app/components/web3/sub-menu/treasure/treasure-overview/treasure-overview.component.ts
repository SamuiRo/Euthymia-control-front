import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { ActivityService } from '../../../../../services/activity/activity.service';
import { ClipboardService } from '../../../../../services/clipboard/clipboard.service';
import { LinkExtractorService } from '../../../../../services/link-extractor/link-extractor.service';

@Component({
  selector: 'app-treasure-overview',
  standalone: true,
  imports: [FormsModule, MarkdownModule],
  templateUrl: './treasure-overview.component.html',
  styleUrl: './treasure-overview.component.sass',
})
export class TreasureOverviewComponent implements OnInit {
  activity_name: string = '';
  article_content: string = '';
  links: string[] = [];

  constructor(
    private route: ActivatedRoute,
    private ActivityService: ActivityService,
    private clipboard: ClipboardService,
    private linkExtractorService: LinkExtractorService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.activity_name = params['activity']; // "+" перед params['id'] конвертує його в число
      // console.log(name); // Робіть тут, що завгодно з отриманим id
    });

    this.getTreasureOverview(this.activity_name);
  }

  getTreasureOverview(name: string) {
    this.ActivityService.get_treasure_overview(name).subscribe({
      next: (value) => {
        console.log(value);
        this.article_content = value.data.details.article_text;
        this.links = this.linkExtractorService.extractLinks(
          this.article_content
        );
        console.log(this.links);
      },
      error: (error) => alert(error.message),
      complete: () => console.log('complete'),
    });
  }

  copyLink(text: string) {
    this.clipboard.copy(text);
  }
}
