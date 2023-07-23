import { FilterArticle } from '@core/models/filter-article';
import { map, Observable } from 'rxjs';
import { ArticleCard } from '@core/models/article-card';
import { ArticleDto } from '@core/dtos/article-dto';
import { inject, Injectable } from '@angular/core';
import { ArticleMapperService } from '@shared/services/mappers/article-mapper.service';
import { HttpClient } from '@angular/common/http';
import { ArticleService } from '@shared/services/article.service';

@Injectable()
export class HomeHttpService {
  private articleMapper = inject(ArticleMapperService);
  private http = inject(HttpClient);

  search(filterArticle: FilterArticle): Observable<Array<ArticleCard>> {
    return this.http
      .get<Array<ArticleDto>>(
        `${ArticleService.API_URL}/search?title=${filterArticle.title}&category=${filterArticle.category}&state=${filterArticle.state}`
      )
      .pipe(
        map((articles: ArticleDto[]) => {
          return articles.map((article: ArticleDto) =>
            this.articleMapper.toArticleCard(article)
          );
        })
      );
  }
}