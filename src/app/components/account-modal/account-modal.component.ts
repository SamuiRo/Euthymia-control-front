import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JsonEditorOptions, NgJsonEditorModule } from 'ang-jsoneditor';
import { JsonStringifyDirective } from '../../directives/json-stringify.directive';
import { JsonStringifyPipe } from '../../pipes/json-stringify.pipe';
import { EncryptionService } from '../../services/encryption/encryption.service';
import { AccountsService } from '../../services/accounts/accounts.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-account-modal',
  standalone: true,
  templateUrl: './account-modal.component.html',
  styleUrl: './account-modal.component.sass',
  imports: [
    FormsModule,
    NgJsonEditorModule,
    JsonStringifyDirective,
    JsonStringifyPipe,
    CommonModule,
  ],
})
export class AccountModalComponent {
  @Input() account: any;
  @Output() closeModalEvent = new EventEmitter<void>();
  @Output() saveChangesEvent = new EventEmitter<any>();

  content: any;
  activeTab: string = 'Ace';
  editorOptions: any;

  evm_input: string = '';
  solana_input: string = '';
  isConfirmed: any = false;
  actionResult: any;

  constructor(
    private encryptionService: EncryptionService,
    private accountService: AccountsService
  ) {
    this.editorOptions = new JsonEditorOptions();
    // this.editorOptions.modes = ['code', 'text', 'tree', 'view'];
    this.editorOptions = {
      mode: 'tree',
      indentation: 2,
    };
  }

  ngOnInit() {
    if (this.activeTab === 'Raw') {
      this.content = JSON.stringify(this.account, null, 2);
    } else {
      this.content = this.account;
    }

    console.log(this.content);
  }

  ngOnChanges(): void {
    console.log('Changes');
  }

  addEnigmaToAccount(account: any, data: string, network: any) {
    const encrypted_data = this.encryptionService.encryptData(data);
    console.log(encrypted_data);
    console.log(
      'decrypted',
      this.encryptionService.decryptData(encrypted_data)
    );

    console.log(account, network);
    this.accountService
      .updateAccountEnigma({
        account,
        enigma: encrypted_data,
        network,
      })
      .subscribe({
        next: (value) => {
          this.evm_input = '';
          this.solana_input = '';
          this.isConfirmed = true;
          setTimeout(() => (this.isConfirmed = false), 5000);
          this.actionResult = value.message;
        },
        error: (error) => alert(error.message),
        complete: () => console.log('complete'),
      });
  }

  closeModal(): void {
    this.closeModalEvent.emit();
  }

  saveChanges(): void {
    // console.log(this.content)
    console.log(JSON.parse(this.content));
    console.log(typeof this.content);
    console.log(typeof this.content);
    console.log(typeof this.content);
    if (typeof this.content === 'string') {
      this.saveChangesEvent.emit(JSON.parse(this.content));
    } else {
      this.saveChangesEvent.emit(this.content);
    }

    // this.closeModal();
  }

  applyChanges() {
    this.saveChangesEvent.emit(this.content);
  }

  changeEditor(value: string) {
    this.activeTab = value;
    if (this.activeTab === 'Raw' && typeof this.content !== 'string') {
      this.content = JSON.stringify(this.content, null, 2);
    }
    if (this.activeTab === 'Ace' && typeof this.content === 'string') {
      this.content = JSON.parse(this.content);
    }
  }

  aaaa(aa: any) {
    console.log(aa);
  }
}
