import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ExchangeDto } from '@core/dtos/exchange.dto';
import { ProposedArticleDto } from '@core/dtos/article/proposed-article.dto';
import { RatingDto } from '@core/dtos/rating/rating.dto';

@Injectable({ providedIn: 'root' })
export class ExchangeService {
  private readonly API_URL = 'http://localhost:8080/api/v1/exchanges';
  private readonly http = inject(HttpClient);

  accept(proposedArticleDto: ProposedArticleDto) {
    return this.http.post<string>(`${this.API_URL}`, proposedArticleDto);
  }

  getByUserId(userId: string) {
    return this.http.get<ExchangeDto[]>(`${this.API_URL}/users/${userId}`);
  }

  discard(exchangeId: string) {
    return this.http.delete(`${this.API_URL}/${exchangeId}`);
  }

  setExchangeMade(exchangeId: string, rating: RatingDto) {
    return this.http.put<string>(`${this.API_URL}/${exchangeId}`, rating);
  }
}
