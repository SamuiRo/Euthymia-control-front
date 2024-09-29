import { Component, NgZone, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-voice-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './voice-input.component.html',
  styleUrl: './voice-input.component.sass',
})
export class VoiceInputComponent implements OnInit {
  voiceText: string = '';
  recognition: any;
  errorMessage: string = '';

  constructor(private ngZone: NgZone) {}

  ngOnInit(): void {
    const { webkitSpeechRecognition }: IWindow = window as any;

    if ('webkitSpeechRecognition' in window) {
      this.recognition = new webkitSpeechRecognition();
      this.recognition.lang = 'uk-UA'; // Мова розпізнавання
      this.recognition.continuous = false;
      this.recognition.interimResults = false;

      this.recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        this.ngZone.run(() => {
          this.voiceText += transcript;
        });
      };

      this.recognition.onerror = (event: any) => {
        this.ngZone.run(() => {
          this.errorMessage = 'Помилка при розпізнаванні: ' + event.error;
        });
      };
    } else {
      this.errorMessage =
        'Голосове розпізнавання не підтримується вашим браузером.';
    }
  }

  startVoiceRecognition() {
    if (this.recognition) {
      this.recognition.start();
    }
  }
}

interface IWindow extends Window {
  webkitSpeechRecognition: any;
}
