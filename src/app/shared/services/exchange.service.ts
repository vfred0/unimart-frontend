import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ExchangeSaveDto } from '@core/dtos/exchange/exchange-save.dto';

@Injectable()
export class ExchangeService {
  private readonly API_URL = 'http://localhost:8080/api/v1/exchanges';
  private readonly http = inject(HttpClient);

  save(exchange: ExchangeSaveDto) {
    return this.http.post<string>(`${this.API_URL}`, exchange);
  }
}
