import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { VoiceInputComponent } from "../shared/voice-input/voice-input.component";
import { CheckboxComponent } from "../shared/checkbox/checkbox.component";

@Component({
  selector: 'app-lending',
  standalone: true,
  imports: [RouterModule, VoiceInputComponent, CheckboxComponent],
  templateUrl: './lending.component.html',
  styleUrl: './lending.component.sass'
})
export class LendingComponent {

}
