import { FilterArticleDto } from '@core/dtos/article/filter-article.dto';
import { map } from 'rxjs';
import { ArticleDto } from '@core/dtos/article/article.dto';
import { inject, Injectable } from '@angular/core';
import { ArticleMapperService } from '@shared/services/mappers/article-mapper.service';
import { ArticleService } from '@shared/services/article.service';
import { ApiSignalState } from '@shared/services/api-signal-state';
import { ArticleCardDto } from '@core/dtos/article/article-card.dto';

@Injectable()
export class HomeService {
  private apiSignalState = new ApiSignalState<ArticleCardDto[]>([]);
  private articleMapper = inject(ArticleMapperService);
  private articleService = inject(ArticleService);

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

  search(filterArticle: FilterArticleDto): void {
    this.articleMapper.mapTypesFilterArticle(filterArticle);
    const observable = this.articleService.search(filterArticle).pipe(
      map((articles: ArticleDto[]) => {
        return articles.map((article: ArticleDto) =>
          this.articleMapper.toArticleCard(article)
        );
      })
    );

    this.apiSignalState.execute(observable);
  }
}
