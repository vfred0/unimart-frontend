import { inject, Injectable } from '@angular/core';
import { RatingDto } from '@core/dtos/rating/rating.dto';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class RatingService {
  private readonly API_URL = `http://localhost:8080/api/v1/ratings`;
  private http = inject(HttpClient);

  save(rating: RatingDto) {
    return this.http.post(this.API_URL, rating);
  }
}
