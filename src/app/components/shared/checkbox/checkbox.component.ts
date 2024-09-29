import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  standalone: true,
  imports: [],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.sass',
})
export class CheckboxComponent {
  @Input() checked: boolean = false;
  @Input() checkboxId!: string; // Унікальний ID для кожного чекбокса
  @Output() checkboxChange = new EventEmitter<boolean>();

  onCheckboxChange(event: Event) {
    const isChecked = (event.target as HTMLInputElement).checked;
    this.checkboxChange.emit(isChecked);
  }
}
