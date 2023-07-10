import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '@components/header/header.component';
import { ExchangeCard } from '@core/types/exchange-card';
import { ButtonComponent } from '@components/button/button.component';
import { TypeButton } from '@core/types/type-button';

@Component({
  selector: 'app-exchange-card',
  standalone: true,
  imports: [CommonModule, HeaderComponent, ButtonComponent],
  templateUrl: './exchange-card.component.html',
})
export class ExchangeCardComponent {
  @Input() exchangeCard: ExchangeCard;
  protected readonly TypeButton = TypeButton;

  constructor() {
    this.exchangeCard = {} as ExchangeCard;
  }
}
