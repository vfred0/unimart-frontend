import { Component, Input } from '@angular/core';
import { isBack, isTag, TypeButton } from '@core/enums/type-button';
import { CommonModule } from '@angular/common';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule, AngularSvgIconModule],
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  @Input() description: string;
  @Input() typeButton: TypeButton;
  @Input() icon: string;
  protected readonly TypeButton = TypeButton;

  constructor() {
    this.typeButton = TypeButton.Primary;
    this.description = this.typeButton;
    this.icon = 'hand';
  }

  get fontSize(): string {
    if (isTag(this.typeButton)) {
      return 'sm-semibold';
    }
    return 'base-semibold';
  }

  get iconSize(): string {
    if (isTag(this.typeButton)) {
      return 'sm';
    }
    return 'lg';
  }

  get isBack(): boolean {
    return isBack(this.typeButton);
  }
}
