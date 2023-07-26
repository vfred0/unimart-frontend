import { ArticleDto } from '@core/dtos/article/article.dto';
import { ArticleCard } from '@core/models/article-card';
import { Injectable } from '@angular/core';
import { ArticlePage } from '@core/models/article-page';

@Injectable({ providedIn: 'root' })
export class ArticleMapperService {
  toArticleCard(article: ArticleDto): ArticleCard {
    return {
      id: article.id,
      image: article.images[0],
      title: article.title,
      dateOfPublication: article.date,
      numberProposals: article.numbersProposals,
      category: article.category,
      state: article.state,
      typeArticle: article.typeArticle,
    } as ArticleCard;
  }

  toArticlePage(article: ArticleDto): ArticlePage {
    return {
      title: article.title,
      description: article.description,
      category: article.category,
      state: article.state,
      images: article.images,
      image: article.images[0],
      date: article.date,
      user: article.user,
      numbersProposals: article.numbersProposals,
      gender: article.gender,
    } as ArticlePage;
  }
}
