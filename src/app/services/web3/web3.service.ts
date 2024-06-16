import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class Web3Service {
  constructor(private http: HttpClient) {}

  getBalance(address: string, network: string) {
    let query_params: any = {
      address,
      network,
    };

    return this.http.get<any>(`${environment.baseUrl}/web3/account-balance`, {
      params: query_params,
    });
  }

  getGasBalance(address: string, network: string) {
    let query_params: any = {
      address,
      network,
    };

    return this.http.get<any>(
      `${environment.baseUrl}/web3/account-gas-balance`,
      { params: query_params }
    );
  }

  rubyscoreVote(address: any, network: string) {
    let params: any = {
      address,
      network,
    };

    return this.http.post<any>(`${environment.baseUrl}/web3/rubyscore`, params);
  }
}
