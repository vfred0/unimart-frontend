import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '@components/header/header.component';
import { ExchangeCardComponent } from '@pages/exchanges/components/exchange-card/exchange-card.component';
import { ExchangeCard } from '@core/types/exchange-card';
import { Data } from '@core/utils/data';

@Component({
  selector: 'app-exchanges-page',
  standalone: true,
  imports: [CommonModule, HeaderComponent, ExchangeCardComponent],
  templateUrl: './exchanges-page.component.html',
})
export class ExchangesPageComponent {
  exchangeCards: Array<ExchangeCard>;

  constructor() {
    this.exchangeCards = Data.exchangeCards;
  }
}
