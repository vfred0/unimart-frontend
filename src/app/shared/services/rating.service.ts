import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FilterRating } from '@core/types/filter-rating';
import { ViewRatingDto } from '@core/dtos/rating/view-rating.dto';
import { ApiSignalState } from '@shared/services/api-signal-state';
import { AuthService } from '@shared/services/auth.service';

@Injectable({ providedIn: 'root' })
export class RatingService {
  private readonly API_URL = `http://localhost:8080/api/v1/ratings`;
  private http = inject(HttpClient);
  private _filterByRating: FilterRating = FilterRating.High;
  private apiSignalState = new ApiSignalState<ViewRatingDto[]>([]);
  private authService = inject(AuthService);

  get averageRating(): number {
    // const totalScore = this.ratings.reduce((a, b) => a + b.score, 0);
    return this.authService.user.rating;
  }

  get ratings(): Array<ViewRatingDto> {
    const ratings = this.apiSignalState.result();
    if (this._filterByRating === FilterRating.High) {
      return ratings.sort((a, b) => b.score - a.score);
    }
    return ratings.sort((a, b) => a.score - b.score);
  }

  allRatings() {
    this.apiSignalState.execute(this.getByUserId(this.authService.userId));
  }

  filterByRating(filterRating: FilterRating) {
    this._filterByRating = filterRating;
  }

  private getByUserId(userId: string) {
    return this.http.get<ViewRatingDto[]>(`${this.API_URL}/users/${userId}`);
  }
}
