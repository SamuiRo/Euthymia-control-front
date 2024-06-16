import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountsService } from '../../../../services/accounts/accounts.service';
import { Web3Service } from '../../../../services/web3/web3.service';
import { FormsModule } from '@angular/forms';
import { RubyscoreComponent } from './modules/rubyscore/rubyscore.component';
import { SyncswapComponent } from './modules/syncswap/syncswap.component';
import { ActivityService } from '../../../../services/activity/activity.service';

@Component({
  selector: 'app-web3profile',
  standalone: true,
  imports: [FormsModule, RubyscoreComponent, SyncswapComponent],
  templateUrl: './web3profile.component.html',
  styleUrl: './web3profile.component.sass',
})
export class Web3profileComponent implements OnInit {
  inputType: string = 'password';
  account_name: any;
  target_account: any = { name: null };
  target_network: any = undefined;
  gas_balance: any;

  //  = {
  //   balance: 0,
  //   network: '',
  // };
  network_list: any = [
    { value: 'eth-mainnet', name: 'Ethereum' },
    { value: 'polygon-mainnet', name: 'Polygon' },
    { value: 'opt-mainnet', name: 'Optimism' },
    { value: 'arb-mainnet', name: 'Arbitrum' },
    { value: 'base-mainnet', name: 'Base' },
    { value: 'zksync-mainnet', name: 'zkSync' },
  ];

  activity_list: any = [
    {
      name: 'RubyScore',
      url: 'https://rubyscore.io/dashboard',
      description: '',
    },
  ];

  constructor(
    private route: ActivatedRoute,
    private accountService: AccountsService,
    private web3Service: Web3Service,
    private activityService: ActivityService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.account_name = params['name']; // "+" перед params['id'] конвертує його в число
      // console.log(name); // Робіть тут, що завгодно з отриманим id
    });

    this.accountService.getSingleAccount(this.account_name).subscribe({
      next: (value) => {
        this.target_account = value;
        console.log(this.target_account);
      },
      error: (error) => alert(error.message),
      complete: () => console.log('complete'),
    });

    this.getActivityList();
  }

  getActivityList() {
    this.activityService.get_activity_list().subscribe({
      next: (value) => {
        console.log(value);
        this.activity_list = value.rows;
      },
      error: (error) => alert(error.message),
      complete: () => console.log('complete'),
    });
  }

  getBalance(address: string, network: string) {
    if (!this.target_network) {
      alert('network is empty');
      return;
    }
    this.web3Service.getBalance(address, network).subscribe({
      next: (value) => {
        console.log(value);
      },
      error: (error) => console.log(error),
      complete: () => console.log('complete'),
    });
  }

  getGasBalance(address: string, network: string) {
    this.web3Service.getGasBalance(address, network).subscribe({
      next: (value) => {
        this.gas_balance = value;
      },
      error: (error) => console.log(error),
      complete: () => console.log('complete'),
    });
  }

  rubyscoreVote(address: string, network: string) {
    this.web3Service.rubyscoreVote(address, network).subscribe({
      next: (value) => {
        // console.log(1);
        console.log(value);
        // this.gas_balance = value;
      },
      error: (error) => console.log(error),
      complete: () => console.log('complete'),
    });
  }

  textToColor(text: string): string {
    console.log(text);
    // Generate hash from the text
    let hash = 0;
    for (let i = 0; i < text.length; i++) {
      hash = text.charCodeAt(i) + ((hash << 5) - hash);
    }

    // Convert hash to RGB
    const rgb = [0, 0, 0];
    for (let i = 0; i < 3; i++) {
      rgb[i] = (hash >> (i * 8)) & 255;
    }

    // Convert RGB to hex color
    return (
      '#' +
      rgb
        .map((c) => {
          const hex = c.toString(16);
          return hex.length == 1 ? '0' + hex : hex;
        })
        .join('')
    );
  }

  showPassword() {
    this.inputType = 'text';
  }

  hidePassword() {
    this.inputType = 'password';
  }
}
