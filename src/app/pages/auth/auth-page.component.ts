import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { InputComponent } from '@components/input/input.component';
import { Icon } from '@core/utils/icon';
import { ButtonComponent } from '@components/button/button.component';
import { TypeButton } from '@core/types/type-button';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    AngularSvgIconModule,
    InputComponent,
    ButtonComponent,
  ],
  templateUrl: './auth-page.component.html',
})
export class AuthPageComponent {
  protected readonly Icon = Icon;
  protected readonly TypeButton = TypeButton;
}
