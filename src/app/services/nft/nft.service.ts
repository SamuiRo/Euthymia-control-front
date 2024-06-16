import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class NftService {
  api_key: string = 'O5R7YH9Yr3sCyD7-KFGP-NmYBSFwqloP';

  network_list: string[] = [
    'eth-mainnet',
    'eth-goerli',
    'eth-sepolia',
    'arb-goerli',
    'arb-mainnet',
    'arb-sepolia',
    'astar-mainnet',
    'base-goerli',
    'base-mainnet',
    'base-sepolia',
    'polygon-amoy',
    'polygon-mainnet',
    'polygon-mumbai',
    'opt-goerli',
    'opt-mainnet',
    'opt-sepolia',
    'polygonzkevm-mainnet',
    'polygonzkevm-testnet',
    '',
    '',
  ];

  optional_params: any = {
    orderBy: 'transferTime',
    orderBy2: null, //orderBy=transferTime
    pageKey: '', //   If more results are available, a pageKey will be returned in the response. Pass back the pageKey as a param to fetch the next page of results.
    pageSize: 100, // Max 100
  };
  constructor(private http: HttpClient) {}

  getNFTsForOwner(address: string, network: string, page_key: any) {
    let query_params: any = {
      owner: address,
      withMetadata: true,
      orderBy: 'transferTime',
      // spamConfidenceLevel:"LOW"
    };
    
    if (page_key) query_params.pageKey = page_key;
    console.log(query_params);

    return this.http.get<any>(
      `https://${network}.g.alchemy.com/nft/v3/${this.api_key}/getNFTsForOwner`,
      { params: query_params }
    );
  }
}
