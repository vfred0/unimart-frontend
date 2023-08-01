import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '@components/header/header.component';
import { ExchangeCardComponent } from '@pages/exchanges/components/exchange-card/exchange-card.component';
import { AddRatingComponent } from '@components/rating/add-rating/add-rating.component';
import { getLayout } from '@core/utils/app-route';
import { ExchangesPageService } from '@shared/services/exchanges-page.service';
import { ExchangeService } from '@shared/services/exchange.service';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    ExchangeCardComponent,
    AddRatingComponent,
  ],
  providers: [ExchangesPageService, ExchangeService],
  templateUrl: './exchanges-page.component.html',
})
export class ExchangesPageComponent {
  service: ExchangesPageService;
  protected readonly getLayout = getLayout;

  constructor() {
    this.service = inject(ExchangesPageService);
    this.service.setExchanges();
  }

  onDiscardExchange(exchangeId: string): void {
    this.service.discardExchange(exchangeId);
  }

  onSaveRating() {
    this.service.setExchanges();
  }
}
