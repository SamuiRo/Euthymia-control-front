import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LinkExtractorService {
  constructor() {}

  // Метод для пошуку всіх посилань у тексті
  extractLinks(text: string): string[] {
    const urlRegex = /(https?:\/\/[^\s]+)/g; // Регулярний вираз для пошуку посилань
    console.log(text);
    return text.match(urlRegex) || []; // Повертаємо масив посилань або порожній масив
  }
}
