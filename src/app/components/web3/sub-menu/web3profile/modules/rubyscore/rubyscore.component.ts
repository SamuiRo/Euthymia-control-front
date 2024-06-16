import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Web3Service } from '../../../../../../services/web3/web3.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-rubyscore',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './rubyscore.component.html',
  styleUrl: './rubyscore.component.sass',
})
export class RubyscoreComponent {
  @Input() address: any;

  network: any = undefined;
  isConfirmed = false;
  isRequestInProgress = false;
  message = '';
  targetNetwork: any;
  network_list: any = [
    // { value: 'eth-mainnet', name: 'Ethereum' },
    // { value: 'polygon-mainnet', name: 'Polygon' },
    // { value: 'opt-mainnet', name: 'Optimism' },
    // { value: 'arb-mainnet', name: 'Arbitrum' },
    // { value: 'base-mainnet', name: 'Base' },
    // { value: 'zksync-mainnet', name: 'zkSync' },
    { value: 'scroll-mainnet', name: 'Scroll' },
  ];

  constructor(private web3Service: Web3Service) {}

  confirmAction() {
    if (!this.network) {
      return alert('Network state is empty');
    }
    if (!this.isConfirmed) {
      this.isConfirmed = true;
      setTimeout(() => (this.isConfirmed = false), 5000); // Автоматичне скасування підтвердження через 5 секунд
    } else {
      this.rubyscoreVote(this.address, this.network);
    }
  }

  rubyscoreVote(address: string, network: string) {
    this.isRequestInProgress = true;
    this.isConfirmed = false;
    this.web3Service.rubyscoreVote(address, network).subscribe({
      next: (value) => {
        // console.log(1);
        console.log(value);
        // this.gas_balance = value;
      },
      error: (error) => console.log(error),
      complete: () => {
        console.log('complete');
        this.isRequestInProgress = false;
      },
    });
  }
}
