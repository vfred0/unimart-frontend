import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from '@shared/components/input/input.component';
import { HeaderComponent } from '@shared/components/header/header.component';
import { SelectComponent } from '@shared/components/select/select.component';
import { TypeArticle } from '@core/types/type-article';
import { getAllValues } from '@core/utils/enum-utils';
import { ArticleCardComponent } from '@shared/components/article-card/article-card.component';
import { FilterRating } from '@core/types/filter-rating';
import { ViewRatingCardComponent } from '@components/rating/view-rating-card/view-rating-card.component';
import { ViewRatingDto } from '@core/dtos/rating/view-rating.dto';
import { TypeButton } from '@core/types/type-button';
import { ButtonComponent } from '@components/button/button.component';
import { Icon } from '@core/types/icon';
import { PublishedArticleCardComponent } from '@components/article-card/published-article-card/published-article-card.component';
import { ProposedArticleCardComponent } from '@components/article-card/proposed-article-card/proposed-article-card.component';
import { getLayout } from '@core/utils/app-route';
import { ProfilePageService } from '@shared/services/profile-page.service';
import { ArticleMapperService } from '@shared/services/mappers/article-mapper.service';
import { ArticleService } from '@shared/services/article.service';
import { RatingService } from '@shared/services/rating.service';

@Component({
  standalone: true,
  templateUrl: './profile-page.component.html',
  imports: [
    CommonModule,
    InputComponent,
    HeaderComponent,
    SelectComponent,
    ArticleCardComponent,
    ViewRatingCardComponent,
    ButtonComponent,
    PublishedArticleCardComponent,
    ProposedArticleCardComponent,
  ],
  providers: [
    ProfilePageService,
    ArticleMapperService,
    ArticleService,
    RatingService,
  ],
})
export class ProfilePageComponent {
  typeArticles: Array<string>;
  filterRatings: Array<FilterRating>;
  viewRatingCards: Array<ViewRatingDto>;
  service: ProfilePageService;
  serviceRating: RatingService;
  protected readonly TypeButton = TypeButton;
  protected readonly Icon = Icon;
  protected readonly getLayout = getLayout;

  constructor() {
    this.typeArticles = getAllValues(TypeArticle);
    this.filterRatings = getAllValues(FilterRating);
    this.viewRatingCards = new Array<ViewRatingDto>();
    this.service = inject(ProfilePageService);
    this.serviceRating = inject(RatingService);
    this.service.allArticles();
    this.serviceRating.allRatings();
  }

  get averageRating(): string {
    return (
      this.viewRatingCards.reduce((acc, curr) => acc + curr.score, 0) /
      this.viewRatingCards.length
    ).toString();
  }

  onTextSearchChanged(title: string) {
    this.service.filterByTitle(title);
  }

  onSelectedTypeArticle(typeArticle: string) {
    this.service.filterByTypeArticle(typeArticle as TypeArticle);
  }

  onSelectedRating(filterRating: string) {
    this.serviceRating.filterByRating(filterRating as FilterRating);
  }

  onDeleteArticle(articleId: string) {
    this.service.deleteArticle(articleId);
  }

  onDeleteProposed(proposedArticleId: string) {
    this.service.deleteProposedArticleById(proposedArticleId);
  }
}
