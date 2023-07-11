import { ChangeDetectorRef, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '@components/header/header.component';
import { ArticleCard } from '@core/models/article-card';
import { Data } from '@core/utils/data';
import { ArticleCardComponent } from '@components/article-card/article-card.component';
import { Router } from '@angular/router';
import { SelectComponent } from '@components/select/select.component';
import { AppRoute } from '@core/utils/app-route';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    ArticleCardComponent,
    SelectComponent,
  ],
  templateUrl: './proposed-articles-page.component.html',
})
export class ProposedArticlesPageComponent {
  articleCards: Array<ArticleCard>;
  categories: Array<string>;

  constructor(
    private router: Router,
    private cd: ChangeDetectorRef
  ) {
    this.articleCards = Data.articleCards;
    this.categories = this.articleCards
      .map(articleCard => articleCard.category)
      .filter(
        (category, index, categories) => categories.indexOf(category) === index
      );
  }

  navigateToViewArticle(articleCardId: string) {
    this.router
      .navigate([`${AppRoute.ViewArticle}/${articleCardId}`], {
        state: { isProposed: true },
      })
      .then();
  }

  onSelectedCategory(category: string) {
    this.articleCards = Data.articleCards.filter(
      articleCard => articleCard.category === category
    );
    this.cd.detectChanges();
  }
}
