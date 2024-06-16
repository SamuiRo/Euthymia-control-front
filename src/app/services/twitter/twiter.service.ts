import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TwiterService {
  constructor(private http: HttpClient) {}

  getRandomTweetForCategory(category: string) {
    let query_params = {
      category,
    };

    return this.http.get<any>(`${environment.baseUrl}/social/twitter/getrandomtweetforcategory`, {
      params: query_params,
    });
  }
}
