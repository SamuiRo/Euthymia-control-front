import { Component, OnInit } from '@angular/core';
import { AccountsService } from '../../../../services/accounts/accounts.service';
import { SharingService } from '../../../../services/sharing/sharing.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-web3profiles',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './web3profiles.component.html',
  styleUrl: './web3profiles.component.sass',
})
export class Web3profilesComponent implements OnInit {
  accounts: any;

  constructor(
    private sharingService: SharingService,
    private accountsService: AccountsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadAllAccounts();
  }

  loadAllAccounts() {
    this.accountsService.getAllAccounts().subscribe({
      next: (value) => (this.accounts = value),
      error: (error) => alert(error.message),
      complete: () => console.log('complete'),
    });
  }

  goToProfile(account: any) {
    console.log(account);
    this.router.navigate(['/web3/w3profile', account.Account]);
  }
}
