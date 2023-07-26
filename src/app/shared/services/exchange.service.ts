import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ExchangeDto } from '@core/dtos/exchange.dto';

@Injectable()
export class ExchangeService {
  private readonly API_URL = 'http://localhost:8080/api/v1/exchanges';
  private readonly http = inject(HttpClient);

  save(exchange: ExchangeDto) {
    return this.http.post<string>(`${this.API_URL}`, exchange);
  }
}
