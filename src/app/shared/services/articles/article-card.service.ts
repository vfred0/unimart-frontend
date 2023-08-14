import { Injectable } from '@angular/core';
import { ArticleCardDto } from '@core/dtos/article/article-card.dto';
import {
  isExchanged,
  isProposed,
  isPublished,
  TypeArticle,
} from '@core/enums/type-article';
import { Category } from '@core/enums/category';

@Injectable({ providedIn: 'root' })
export class ArticleCardService {
  private articleCards: ArticleCardDto[] = [];

  get containsPublishedArticles(): boolean {
    return this.articleCards.some(articleCard => {
      return isPublished(articleCard.typeArticle as TypeArticle);
    });
  }

  get categories() {
    return this.articleCards
      .map(articleCard => articleCard.category)
      .filter(this.filterByIndexCategory());
  }

  get totalArticlesCards(): number {
    return this.articleCards.length;
  }

  setArticlesCards(articlesCards: ArticleCardDto[]) {
    this.articleCards = articlesCards;
  }

  filterByCategory(category: string) {
    return this.articleCards.filter(
      articleCard => articleCard.category === category
    );
  }

  filterByTitleAndCategory(title: string, category: Category) {
    return this.filterByCategory(category).filter(articleCard => {
      return articleCard.title.toLowerCase().includes(title.toLowerCase());
    });
  }

  filterByTitleAndTypeArticle(title: string, typeArticle: TypeArticle) {
    return this.articleCards.filter(articleCard => {
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
    return this.articleCards
      .filter(articleCard => {
        return !isExchanged(articleCard.typeArticle as TypeArticle);
      })
      .map(articleCard => articleCard.category)
      .filter(this.filterByIndexCategory());
  }

  filterCategoriesNotProposed() {
    return this.articleCards
      .filter(articleCard => {
        return !isProposed(articleCard.typeArticle as TypeArticle);
      })
      .map(articleCard => articleCard.category)
      .filter(this.filterByIndexCategory());
  }

  private filterByIndexCategory() {
    return (category: Category, index: number, categories: Category[]) =>
      categories.indexOf(category) === index;
  }
}
