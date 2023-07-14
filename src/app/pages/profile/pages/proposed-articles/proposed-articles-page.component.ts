import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '@components/header/header.component';
import { ArticleCard } from '@core/models/article-card';
import { Data } from '@core/utils/data';
import { ArticleCardComponent } from '@components/article-card/article-card.component';
import { Router } from '@angular/router';
import { SelectComponent } from '@components/select/select.component';
import { getLayout } from '@core/utils/app-route';
import { ProposedArticleCardComponent } from '@components/article-card/proposed-article-card/proposed-article-card.component';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    ArticleCardComponent,
    SelectComponent,
    ProposedArticleCardComponent,
  ],
  templateUrl: './proposed-articles-page.component.html',
})
export class ProposedArticlesPageComponent {
  articleCards: Array<ArticleCard>;
  categories: Array<string>;
  protected readonly getLayout = getLayout;
  constructor(private router: Router) {
    this.articleCards = Data.articleCards;
    this.categories = this.articleCards
      .map(articleCard => articleCard.category)
      .filter(
        (category, index, categories) => categories.indexOf(category) === index
      );
  }

  onSelectedCategory(category: string) {
    this.articleCards = Data.articleCards.filter(
      articleCard => articleCard.category === category
    );
  }
}
