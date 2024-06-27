import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  constructor(private http: HttpClient) {}

  fullDBSync() {
    return this.http.post<any>(`${environment.baseUrl}/utils/fulldbsync`, {});
  }

  DBSync() {
    return this.http.post<any>(`${environment.baseUrl}/utils/dbsync`, {});
  }

  importAccounts() {
    return this.http.post<any>(
      `${environment.baseUrl}/utils/import-accounts`,
      {}
    );
  }

  importTasks() {
    return this.http.post<any>(`${environment.baseUrl}/utils/import-tasks`, {});
  }

  importActivity() {
    return this.http.post<any>(
      `${environment.baseUrl}/utils/import-activity`,
      {}
    );
  }

  importRoutine() {
    return this.http.post<any>(
      `${environment.baseUrl}/utils/import-routine`,
      {}
    );
  }

  importTreasure() {
    return this.http.post<any>(
      `${environment.baseUrl}/utils/import-treasure`,
      {}
    );
  }

  importArcade() {
    return this.http.post<any>(
      `${environment.baseUrl}/utils/import-arcade`,
      {}
    );
  }
}
