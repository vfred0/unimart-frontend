import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleCardComponent } from '@components/article-card/article-card.component';
import { HeaderComponent } from '@components/header/header.component';
import { SelectComponent } from '@components/select/select.component';
import { InputComponent } from '@components/input/input.component';
import { ArticleCard } from '@core/models/article-card';
import { Data } from '@core/utils/data';
import { TypeArticleCard } from '@core/types/type-article-card';
import { Category } from '@core/types/category';
import { SuggestArticleCardComponent } from '@components/article-card/suggest-article-card/suggest-article-card.component';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    ArticleCardComponent,
    HeaderComponent,
    SelectComponent,
    InputComponent,
    SuggestArticleCardComponent,
  ],
  templateUrl: './suggest-article-page.component.html',
})
export class SuggestArticlePageComponent {
  articleCards: Array<ArticleCard>;
  categories: Array<string>;
  title: string;
  category: Category;
  protected readonly TypeArticleCard = TypeArticleCard;

  constructor() {
    this.articleCards = Data.articleCards;
    this.categories = this.articleCards
      .map(articleCard => articleCard.category)
      .filter(
        (category, index, categories) => categories.indexOf(category) === index
      );
    this.title = '';
    this.category = {} as Category;
  }

  onTitleSearchChanged(title: string) {
    this.title = title;
    this.updateArticleCards();
  }

  suggestArticle(articleId: string) {
    console.log(articleId);
  }

  onSelectedCategory(category: string) {
    this.category = category as Category;
    this.updateArticleCards();
  }

  private updateArticleCards() {
    this.articleCards = Data.articleCards.filter(
      articleCard =>
        articleCard.category === this.category &&
        articleCard.title.toLowerCase().includes(this.title.toLowerCase())
    );
  }
}
