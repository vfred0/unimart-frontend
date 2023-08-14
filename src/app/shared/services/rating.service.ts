import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FilterRating } from '@core/enums/filter-rating';
import { ViewRatingDto } from '@core/dtos/rating/view-rating.dto';
import { Service } from '@shared/services/service';
import { AuthService } from '@shared/services/auth.service';

@Injectable({ providedIn: 'root' })
export class RatingService extends Service<ViewRatingDto[]> {
  private readonly API_URL = `http://localhost:8080/api/v1/ratings`;
  private readonly http = inject(HttpClient);
  private readonly authService = inject(AuthService);
  private _filterByRating: FilterRating = FilterRating.High;

  constructor() {
    super([] as ViewRatingDto[]);
  }

  get averageRating(): number {
    const user = this.authService.user;
    if (Object.keys(user).length !== 0) {
      return user.rating;
    }
    return 0;
  }

  get ratings(): Array<ViewRatingDto> {
    const ratings = this.result();
    if (this._filterByRating === FilterRating.High) {
      return ratings.sort((a, b) => b.score - a.score);
    }
    return ratings.sort((a, b) => a.score - b.score);
  }

  allRatings() {
    this.execute(this.getByUserId(this.authService.userId));
  }

  filterByRating(filterRating: FilterRating) {
    this._filterByRating = filterRating;
  }

  private getByUserId(userId: string) {
    return this.http.get<ViewRatingDto[]>(`${this.API_URL}/users/${userId}`);
  }
}
