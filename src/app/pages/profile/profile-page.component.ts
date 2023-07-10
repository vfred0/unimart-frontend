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
  ],
})
export class ProfilePageComponent {
  articleCards: Array<ArticleCard>;
  typeArticles: Array<string>;
  typeArticleCard: TypeArticleCard;

  constructor(private router: Router) {
    this.typeArticles = getAllValues(TypeArticle);
    this.articleCards = Data.articleCards;
    this.typeArticleCard = TypeArticleCard.Normal;
  }

  redirectToViewArticle(articleCard: ArticleCard) {
    this.router.navigate(['/article', articleCard.id]);
  }

  onSelectedTypeArticle(typeArticle: string) {
    this.typeArticleCard = typeArticle as TypeArticleCard;
  }
}
