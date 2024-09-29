import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClipboardService {
  private clipboardContent: string = '';
  private clipboardTimer: any;
  private clearClipboardTimer$ = new Subject<void>();

  constructor() {
    // Підписка на події очищення буфера обміну
    this.clearClipboardTimer$.subscribe(() => {
      this.clearClipboard();
    });
  }

  // Метод для копіювання даних до буфера обміну
  copyToClipboard(data: string): void {
    this.clipboardContent = data;
    // Встановлення таймера на очищення буфера обміну через 10 секунд (10000 мілісекунд)
    this.clipboardTimer = setTimeout(() => {
      this.clearClipboardTimer$.next();
    }, 15000);
  }

  // Метод для очищення буфера обміну
  clearClipboard(): void {
    this.clipboardContent = '';
    clearTimeout(this.clipboardTimer);
  }

  copy(text: string): void {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        // alert('Посилання скопійовано: ' + link); // Сповіщення про копіювання
      })
      .catch((err) => {
        console.error('Помилка при копіюванні: ', err);
      });
  }
  // Метод для отримання даних з буфера обміну
  getClipboardContent(): string {
    return this.clipboardContent;
  }

  copyToClipboard1(text: string): Promise<void> {
    return navigator.clipboard.writeText(text);
  }

  async copyAndDeleteAfterDelay(text: string, delayMs: number): Promise<void> {
    // Copy text to clipboard
    await this.copyToClipboard(text);

    // Set timeout to delete text after delay
    setTimeout(() => {
      // Clear clipboard by copying an empty string
      navigator.clipboard.writeText('');
    }, delayMs);
  }
}
