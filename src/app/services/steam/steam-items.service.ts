import { Injectable } from '@angular/core';

import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SteamItemsService {
  constructor(private http: HttpClient) {}

  getSteamItems() {
    let query_params = {
      id: 1,
      xxx: 2
    }

    return this.http.get<any>(
      `${environment.baseUrl}/steam/items`, { params: query_params }
    );
  }
}
