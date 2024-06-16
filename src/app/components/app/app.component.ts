import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NotificationComponent } from '../notification/notification.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, NotificationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
})
export class AppComponent {
  title = 'Euthymia-control-front';
}
