import { inject, Injectable } from '@angular/core';
import { Service } from '@shared/services/service';
import { ExchangeDto } from '@core/dtos/exchange.dto';
import { ExchangeService } from '@shared/services/exchanges/exchange.service';
import { AuthService } from '@shared/services/auth.service';
import { RatingDto } from '@core/dtos/rating/rating.dto';

@Injectable({ providedIn: 'root' })
export class ExchangesPageService extends Service<ExchangeDto[]> {
  private readonly exchangeService = inject(ExchangeService);
  private readonly authService = inject(AuthService);

  constructor() {
    super([] as ExchangeDto[]);
  }

  get userId() {
    return this.authService.userId;
  }

  get isEmpty(): boolean {
    return this.exchanges.length === 0;
  }

  get exchanges() {
    return this.result().filter(exchange => !exchange.hasBeenRated);
  }

  setExchanges() {
    const request = this.exchangeService.getByUserId(this.authService.userId);
    this.execute(request);
  }

  discardExchange(exchangeId: string) {
    this.exchangeService.discard(exchangeId).subscribe(() => {
      this.setExchanges();
    });
  }

  addRating(exchangeId: string, rating: RatingDto) {
    return this.exchangeService.setExchangeMade(exchangeId, rating);
  }
}
