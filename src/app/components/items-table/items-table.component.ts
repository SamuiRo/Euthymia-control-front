import { Component, OnInit } from '@angular/core';
import { SteamItemsService } from '../../services/steam/steam-items.service';

@Component({
  selector: 'app-items-table',
  standalone: true,
  imports: [],
  templateUrl: './items-table.component.html',
  styleUrl: './items-table.component.sass',
})
export class ItemsTableComponent implements OnInit {
  items: any;

  constructor(private steamService: SteamItemsService) {}

  ngOnInit(): void {
    this.loadItems();
  }

  loadItems() {
    this.steamService.getSteamItems().subscribe({
      next: (value) => {
        this.items = value.items;
        console.log(value);
      },
      error: (error) => console.log(error.message),
      complete: () => console.log('complete'),
    });
  }
}
