import { inject, Injectable } from '@angular/core';
import { ApiSignalState } from '@shared/services/api-signal-state';
import { ExchangeDto } from '@core/dtos/exchange/exchange.dto';
import { HttpClient } from '@angular/common/http';
import { ExchangeService } from '@shared/services/exchange.service';
import { AuthService } from '@shared/services/auth.service';

@Injectable()
export class ExchangesPageService {
  private readonly apiSignalState = new ApiSignalState<ExchangeDto[]>([]);
  private readonly httpService = inject(HttpClient);
  private exchangeService = inject(ExchangeService);
  private readonly authService = inject(AuthService);

  get isEmpty(): boolean {
    return this.exchanges.length === 0;
  }

  get exchanges() {
    return this.apiSignalState.result();
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
    this.exchangeService.delete(exchangeId).subscribe(() => {
      this.setExchanges();
    });
  }
}
