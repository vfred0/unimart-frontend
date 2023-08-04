import { ArticleDto } from '@core/dtos/article/article.dto';
import { ArticleCardDto } from '@core/dtos/article/article-card.dto';
import { Injectable } from '@angular/core';
import { getKey, getValue } from '@core/utils/enum-utils';
import { State } from '@core/types/state';
import { Category } from '@core/types/category';
import { Gender } from '@core/types/gender';
import { FilterArticleDto } from '@core/dtos/article/filter-article.dto';
import { TypeArticle } from '@core/types/type-article';

@Injectable({ providedIn: 'root' })
export class ArticleMapperService {
  toArticleCard(article: ArticleDto): ArticleCardDto {
    article = this.mapTypesToCamelCase(article);
    return {
      id: article.id,
      image: article.images[0],
      title: article.title,
      date: article.date,
      numbersProposals: article.numbersProposals,
      category: article.category,
      state: article.state,
      receiverArticleId: article.receiverArticleId,
      typeArticle: article.typeArticle,
      acceptProposals: article.acceptProposals,
    } as ArticleCardDto;
  }

  mapTypesToCamelCase(article: ArticleDto) {
    article.state = getValue(article.state, State) as State;
    article.category = getValue(article.category, Category) as Category;
    article.typeArticle = getValue(
      article.typeArticle,
      TypeArticle
    ) as TypeArticle;
    if (article.gender) {
      article.gender = getValue(article.gender, Gender) as Gender;
    }
    return article;
  }

  mapTypesToUpperSnakeCase(article: ArticleDto) {
    article.state = getKey(State, article.state) as State;
    article.category = getKey(Category, article.category) as Category;
    if (article.gender) {
      article.gender = getKey(Gender, article.gender) as Gender;
    }
    return article;
  }

  mapTypesFilterArticleToUpperSnakeCase(filterArticle: FilterArticleDto) {
    filterArticle.state = getKey(State, filterArticle.state) as State;
    filterArticle.category = getKey(
      Category,
      filterArticle.category
    ) as Category;
  }
}
