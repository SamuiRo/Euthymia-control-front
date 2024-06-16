import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

import { encryption_key } from '../../../environments/environment.secret';

@Injectable({
  providedIn: 'root',
})
export class EncryptionService {
  private encryptionKey: string = encryption_key;

  constructor() {}

  encryptData(data: string): string {
    return CryptoJS.AES.encrypt(data, this.encryptionKey).toString();
  }

  decryptData(encryptedData: string): string {
    const bytes = CryptoJS.AES.decrypt(encryptedData, this.encryptionKey);
    return bytes.toString(CryptoJS.enc.Utf8);
  }

  generateEncryptionKey(): string {
    return CryptoJS.lib.WordArray.random(128 / 8).toString(CryptoJS.enc.Hex);
  }
}
