import { FilterArticleDto } from '@core/dtos/article/filter-article.dto';
import { map } from 'rxjs';
import { ArticleDto } from '@core/dtos/article/article.dto';
import { inject, Injectable } from '@angular/core';
import { ArticleMapperService } from '@shared/mappers/article-mapper.service';
import { ArticleService } from '@shared/services/articles/article.service';
import { Service } from '@shared/services/service';
import { ArticleCardDto } from '@core/dtos/article/article-card.dto';

@Injectable({ providedIn: 'root' })
export class HomeService extends Service<ArticleCardDto[]> {
  private articleMapper: ArticleMapperService = inject(ArticleMapperService);
  private articleService: ArticleService = inject(ArticleService);

  constructor() {
    super([] as ArticleCardDto[]);
  }

  get totalArticlesCards(): number {
    return this.articlesCards.length;
  }

  get articlesCards() {
    return this.result();
  }

  search(filterArticle: FilterArticleDto): void {
    this.articleMapper.mapTypesFilterArticleToUpperSnakeCase(filterArticle);
    const request = this.articleService.search(filterArticle).pipe(
      map((articles: ArticleDto[]) => {
        return articles.map((article: ArticleDto) =>
          this.articleMapper.toArticleCard(article)
        );
      })
    );

    this.execute(request);
  }
}
