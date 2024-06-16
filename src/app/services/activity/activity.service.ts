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
}
