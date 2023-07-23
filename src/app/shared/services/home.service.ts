import { FilterArticle } from '@core/models/filter-article';
import { map } from 'rxjs';
import { ArticleDto } from '@core/dtos/article-dto';
import { inject, Injectable } from '@angular/core';
import { ArticleMapperService } from '@shared/services/mappers/article-mapper.service';
import { HttpClient } from '@angular/common/http';
import { ArticleService } from '@shared/services/article.service';
import { ApiSignalState } from '@shared/services/api-signal-state';
import { ArticleCard } from '@core/models/article-card';

@Injectable()
export class HomeService {
  private apiSignalState = new ApiSignalState<ArticleCard[]>([]);
  private articleMapper = inject(ArticleMapperService);
  private http = inject(HttpClient);

  get totalArticlesCards(): number {
    return this.articlesCards.length;
  }

  get articlesCards() {
    return this.apiSignalState.result();
  }

  get isCompleted() {
    return this.apiSignalState.isCompleted();
  }

  get isWorking() {
    return this.apiSignalState.isWorking();
  }

  search(filterArticle: FilterArticle): void {
    const observable = this.http
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

    this.apiSignalState.execute(observable);
  }
}
