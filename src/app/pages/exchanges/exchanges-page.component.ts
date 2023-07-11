import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '@components/header/header.component';
import { ExchangeCardComponent } from '@pages/exchanges/components/exchange-card/exchange-card.component';
import { ExchangeCard } from '@core/types/exchange-card';
import { Data } from '@core/utils/data';
import { AddRatingComponent } from '@components/rating/add-rating/add-rating.component';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    ExchangeCardComponent,
    AddRatingComponent,
  ],
  templateUrl: './exchanges-page.component.html',
})
export class ExchangesPageComponent {
  exchangeCards: Array<ExchangeCard>;

  constructor() {
    this.exchangeCards = Data.exchangeCards;
  }

  onDiscardRating(exchangeId: string): void {
    console.log('Discard rating for exchange with id: ', exchangeId);
  }
}
