import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ActivityService {
  constructor(private http: HttpClient) {}

  get_activity_list() {
    return this.http.get<any>(`${environment.baseUrl}/activity/list`);
  }

  get_routine_list() {
    return this.http.get<any>(`${environment.baseUrl}/activity/routine`);
  }

  get_activity_overview(name: string) {
    let query_params = {
      name,
    };

    return this.http.get<any>(`${environment.baseUrl}/activity/overview`, {
      params: query_params,
    });
  }

  get_treasure_list() {
    return this.http.get<any>(`${environment.baseUrl}/activity/treasure-list`);
  }

  get_treasure_overview(name: string) {
    let query_params = {
      name,
    };

    return this.http.get<any>(
      `${environment.baseUrl}/activity/treasure-overview`,
      {
        params: query_params,
      }
    );
  }

  get_arcade_list() {
    return this.http.get<any>(`${environment.baseUrl}/activity/arcade-list`);
  }

  get_arcade_overview(name: string) {
    let query_params = {
      name,
    };

    return this.http.get<any>(
      `${environment.baseUrl}/activity/arcade-overview`,
      {
        params: query_params,
      }
    );
  }
}
