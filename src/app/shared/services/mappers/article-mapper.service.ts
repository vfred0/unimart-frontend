import { ArticleDto } from '@core/dtos/article/article.dto';
import { ArticleCardDto } from '@core/dtos/article/article-card.dto';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ArticleMapperService {
  toArticleCard(article: ArticleDto): ArticleCardDto {
    return {
      id: article.id,
      image: article.images[0],
      title: article.title,
      date: article.date,
      numbersProposals: article.numbersProposals,
      category: article.category,
      state: article.state,
      typeArticle: article.typeArticle,
      acceptProposals: article.acceptProposals,
    } as ArticleCardDto;
  }
}
