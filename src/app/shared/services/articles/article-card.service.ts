import { Injectable } from '@angular/core';
import { ArticleCardDto } from '@core/dtos/article/article-card.dto';
import {
  isExchanged,
  isPublished,
  TypeArticle,
} from '@core/enums/type-article';
import { Category } from '@core/enums/category';

@Injectable({ providedIn: 'root' })
export class ArticleCardService {
  private articlesCards: ArticleCardDto[] = [];

  get containsPublishedArticles(): boolean {
    return this.articlesCards.some(articleCard => {
      return isPublished(articleCard.typeArticle as TypeArticle);
    });
  }

  get categories() {
    return this.articlesCards
      .map(articleCard => articleCard.category)
      .filter(this.filterByIndexCategory());
  }

  get totalArticlesCards(): number {
    return this.articlesCards.length;
  }

  setArticlesCards(articlesCards: ArticleCardDto[]) {
    this.articlesCards = articlesCards;
  }

  filterByCategory(category: string) {
    return this.articlesCards.filter(
      articleCard => articleCard.category === category
    );
  }

  filterByTitleAndTypeArticle(title: string, typeArticle: TypeArticle) {
    return this.articlesCards.filter(articleCard => {
      const includesTitle = articleCard.title
        .toLowerCase()
        .includes(title.toLowerCase());
      if (isPublished(typeArticle)) {
        return (
          includesTitle && !isExchanged(articleCard.typeArticle as TypeArticle)
        );
      }
      return includesTitle && articleCard.typeArticle === typeArticle;
    });
  }

  getCategoriesNotExchanged() {
    return this.articlesCards
      .filter(articleCard => {
        return !isExchanged(articleCard.typeArticle as TypeArticle);
      })
      .map(articleCard => articleCard.category)
      .filter(this.filterByIndexCategory());
  }

  private filterByIndexCategory() {
    return (category: Category, index: number, categories: Category[]) =>
      categories.indexOf(category) === index;
  }
}
