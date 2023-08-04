import { inject, Injectable } from '@angular/core';
import { ApiSignalState } from '@shared/services/api-signal-state';
import { ExchangeDto } from '@core/dtos/exchange.dto';
import { HttpClient } from '@angular/common/http';
import { ExchangeService } from '@shared/services/exchange.service';
import { AuthService } from '@shared/services/auth.service';
import { RatingDto } from '@core/dtos/rating/rating.dto';
import { RatingService } from '@shared/services/rating.service';

@Injectable({ providedIn: 'root' })
export class ExchangesPageService {
  private readonly apiSignalState = new ApiSignalState<ExchangeDto[]>([]);
  private readonly httpService = inject(HttpClient);
  private exchangeService = inject(ExchangeService);
  private readonly ratingService = inject(RatingService);
  private readonly authService = inject(AuthService);

  get userId() {
    return this.authService.userId;
  }

  get isEmpty(): boolean {
    return this.exchanges.length === 0;
  }

  get exchanges() {
    return this.apiSignalState
      .result()
      .filter(exchange => !exchange.hasBeenRated);
  }

  get isCompleted() {
    return this.apiSignalState.isCompleted();
  }

  get isWorking() {
    return this.apiSignalState.isWorking();
  }

  setExchanges() {
    const request = this.exchangeService.getByUserId(this.authService.userId);
    this.apiSignalState.execute(request);
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
