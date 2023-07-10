import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from '@shared/components/input/input.component';
import { HeaderComponent } from '@shared/components/header/header.component';
import { SelectComponent } from '@shared/components/select/select.component';
import { TypeArticle } from '@core/types/type-article';
import { getAllValues } from '@core/types/enum-utils';
import { ArticleCardComponent } from '@shared/components/article-card/article-card.component';
import { ArticleCard } from '@core/models/article-card';
import { Router } from '@angular/router';
import { Data } from '@core/utils/data';
import { TypeArticleCard } from '@core/types/type-article-card';
import { FilterRating } from '@core/types/filter-rating';
import { ViewRatingComponent } from '@components/rating/view-rating-card/view-rating-card.component';
import { ViewRatingCard } from '@core/types/view-rating-card';
import { TypeButton } from '@core/types/type-button';
import { ButtonComponent } from '@components/button/button.component';

@Component({
  selector: 'app-profile-page',
  standalone: true,
  templateUrl: './profile-page.component.html',
  imports: [
    CommonModule,
    InputComponent,
    HeaderComponent,
    SelectComponent,
    ArticleCardComponent,
    ViewRatingComponent,
    ButtonComponent,
  ],
})
export class ProfilePageComponent {
  articleCards: Array<ArticleCard>;
  typeArticles: Array<string>;
  typeArticleCard: TypeArticleCard;
  filterRatings: Array<FilterRating>;
  viewRatingCards: Array<ViewRatingCard>;
  protected readonly TypeButton = TypeButton;

  redirectToViewArticle(articleCard: ArticleCard) {
    this.router.navigate(['/article', articleCard.id]);
  }

  onSelectedTypeArticle(typeArticle: string) {
    this.typeArticleCard = typeArticle as TypeArticleCard;
  }

  constructor(private router: Router) {
    this.typeArticles = getAllValues(TypeArticle);
    this.articleCards = Data.articleCards;
    this.typeArticleCard = TypeArticleCard.Normal;
    this.filterRatings = getAllValues(FilterRating);
    this.viewRatingCards = Data.viewRatingCards;
  }

  get averageRating(): string {
    return (
      this.viewRatingCards.reduce((acc, curr) => acc + curr.rating, 0) /
      this.viewRatingCards.length
    ).toString();
  }

  onSelectedRating(rating: string) {
    console.info(`%cINFO: ${JSON.stringify(rating)}`, 'color: #bcf0da;');
  }
}
