import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '@components/button/button.component';
import { Icon } from '@core/enums/icon';
import { TypeButton } from '@core/enums/type-button';

@Component({
  selector: 'app-button-select-image',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './button-select-image.component.html',
})
export class ButtonSelectImageComponent {
  image: string;
  @Output() imageSelected: EventEmitter<string>;
  protected readonly Icon = Icon;
  protected readonly TypeButton = TypeButton;

  constructor() {
    this.imageSelected = new EventEmitter<string>();
    this.image = '';
  }

  onFileSelected(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const files = inputElement?.files;

    if (files && files.length > 0) {
      const file = files[0];
      const reader = new FileReader();
      reader.onload = () => {
        this.image = reader.result as string;
        this.imageSelected.emit(this.image);
      };
      reader.readAsDataURL(file);
    }
  }
}
