import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AccountsService } from '../../services/accounts/accounts.service';
import { AccountModalComponent } from '../account-modal/account-modal.component';
import { FormsModule } from '@angular/forms';
import { ClipboardService } from '../../services/clipboard/clipboard.service';
import { EncryptionService } from '../../services/encryption/encryption.service';

@Component({
  selector: 'app-json-cosmos',
  standalone: true,
  imports: [CommonModule, AccountModalComponent, FormsModule],
  templateUrl: './json-cosmos.component.html',
  styleUrl: './json-cosmos.component.sass',
})
export class JsonCosmosComponent implements OnInit {
  accounts: any;
  isModalOpen = false;
  selectedAccount: any;

  key: string = '';
  encrypteddata: any;
  decrypteddata: any;

  constructor(
    private accountsService: AccountsService,
    private clipboard: ClipboardService,
    private encryptionService: EncryptionService
  ) {}

  ngOnInit(): void {
    this.loadAllAccounts();
  }

  getKey() {
    this.key = this.encryptionService.generateEncryptionKey();
  }

  encrypt(data: any) {
    this.encrypteddata = this.encryptionService.encryptData(data);
    this.decrypteddata = this.encryptionService.decryptData(this.encrypteddata);
  }

  loadAllAccounts() {
    this.accountsService.getAllAccounts().subscribe({
      next: (value) => (this.accounts = value),
      error: (error) => alert(error.message),
      complete: () => console.log('complete'),
    });
  }

  getAccountEnigma(account_name: any, enigma: any) {
    this.accountsService.getAccountEnigma(account_name, enigma).subscribe({
      next: (value) => {
        this.clipboard.copyAndDeleteAfterDelay('value', 10000);
        console.log('copied');
      },
      error: (error) => alert(error.message),
      complete: () => console.log('complete'),
    });
  }

  editProfile(account: any) {
    console.log(account);
  }

  saveChanges(account: any) {
    // console.log('SAVING');
    console.log(account);
    this.accountsService.upsertAccount(account).subscribe({
      next: (value) => value,
      error: (error) => alert(error.message),
      complete: () => console.log('complete'),
    });
  }

  openModal(account: any): void {
    this.selectedAccount = account;
    console.log(account);
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
  }
}
