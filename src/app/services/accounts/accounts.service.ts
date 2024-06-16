import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AccountsService {
  constructor(private http: HttpClient) {}

  getAllAccounts() {
    let query_params = {
      id: 'someacc',
      acc: 'asd',
    };

    return this.http.get<any>(`${environment.baseUrl}/dolphinaccounts/`, {
      params: query_params,
    });
  }

  getSingleAccount(account_name: string) {
    return this.http.get<any>(
      `${environment.baseUrl}/dolphinaccounts/${account_name}`
    );
  }

  upsertAccount(account: any) {
    return this.http.put<any>(
      `${environment.baseUrl}/dolphinaccounts/`,
      account
    );
  }

  getAccountEnigma(account_name: any, enigma: any) {
    let query_params = { account: account_name, enigma };
    console.log(query_params);
    return this.http.get<any>(`${environment.baseUrl}/account/enigma`, {
      params: query_params,
    });
  }

  updateAccountEnigma(account: any) {
    return this.http.put<any>(`${environment.baseUrl}/account/enigma`, account);
  }
}
