import { Component } from '@angular/core';
import { NftService } from '../../../../services/nft/nft.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nft-dashboard',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './nft-dashboard.component.html',
  styleUrl: './nft-dashboard.component.sass',
})
export class NftDashboardComponent {
  selectedNetwork: any;
  address: any = '0x364aBC32aAdDee7E82416BB15d9d764AD373F17D';
  pageKey: any = null;
  networkList: any = [
    { value: 'eth-mainnet', name: 'Ethereum' },
    { value: 'arb-mainnet', name: 'Arbitrum' },
    { value: 'polygon-mainnet', name: 'Polygon' },
    { value: 'opt-mainnet', name: 'Optimism' },
    { value: 'base-mainnet', name: 'Base' },
    { value: 'astar-mainnet', name: 'Astar' },
    { value: 'polygonzkevm-mainnet', name: 'zkEVM' },
    { value: 'eth-goerli', name: 'Eth Goerli' },
    { value: 'eth-sepolia', name: 'Eth Sepolia' },
    { value: 'arb-goerli', name: 'Arb Goerli' },
    { value: 'arb-sepolia', name: 'Arb Sepolia' },
    { value: 'base-goerli', name: 'Base Goerli' },
    { value: 'base-sepolia', name: 'Base Sepolia' },
    { value: 'opt-goerli', name: 'Op Goerli' },
    { value: 'opt-sepolia', name: 'Op Sepolia' },
    { value: 'polygon-amoy', name: 'Polygon Amoy' },
    { value: 'polygon-mumbai', name: 'Polygon Mumbai' },
    { value: 'polygonzkevm-testnet', name: 'zkEVM Testnet' },
  ];

  NFTViewerList: any = [];
  totalNFTCount: any = 0;
  constructor(private nftService: NftService) {}

  getNFTsForOwner(address: string, network: string, pageKey?: any) {
    // this.pageKey = null;
    return this.nftService
      .getNFTsForOwner(address, network, pageKey)
      .subscribe({
        next: (value) => {
          console.log(value);
          this.NFTViewerList = value.ownedNfts;
          this.totalNFTCount = value.totalCount;
          if (value.pageKey !== null) {
            this.pageKey = value.pageKey;
            console.log(value.pageKey);
            console.log('pageKat', this.pageKey);
          } else {
            this.pageKey = null;
          }
        },
        error: (error) => console.log(error),
        complete: () => console.log('complete'),
      });
  }
}
