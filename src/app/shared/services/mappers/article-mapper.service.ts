import { ArticleDto } from '@core/dtos/article/article.dto';
import { ArticleCardDto } from '@core/dtos/article/article-card.dto';
import { Injectable } from '@angular/core';
import { getKey, getValueFromEnum } from '@core/utils/enum-utils';
import { State } from '@core/types/state';
import { Category } from '@core/types/category';
import { Gender } from '@core/types/gender';

@Injectable({ providedIn: 'root' })
export class ArticleMapperService {
  toArticleCard(article: ArticleDto): ArticleCardDto {
    article = this.mapTypes(article);
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

  mapTypes(article: ArticleDto) {
    article.state = getValueFromEnum(article.state, State) as State;
    article.category = getValueFromEnum(article.category, Category) as Category;
    if (article.gender) {
      article.gender = getValueFromEnum(article.gender, Gender) as Gender;
    }
    return article;
  }

  mapTypesOnUppercase(article: ArticleDto) {
    article.state = getKey(State, article.state) as State;
    article.category = getKey(Category, article.category) as Category;
    if (article.gender) {
      article.gender = getKey(Gender, article.gender) as Gender;
    }
    return article;
  }
}
