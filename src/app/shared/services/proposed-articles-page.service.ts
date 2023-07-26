import { map } from 'rxjs';
import { ArticleDto } from '@core/dtos/article.dto';
import { inject, Injectable } from '@angular/core';
import { ArticleMapperService } from '@shared/services/mappers/article-mapper.service';
import { HttpClient } from '@angular/common/http';
import { ArticleService } from '@shared/services/article.service';
import { ApiSignalState } from '@shared/services/api-signal-state';
import { ArticleCard } from '@core/models/article-card';

@Injectable()
export class ProposedArticlesPageService {
  private apiSignalState = new ApiSignalState<ArticleCard[]>([]);
  private articleMapper = inject(ArticleMapperService);
  private articleService = inject(ArticleService);
  private http = inject(HttpClient);
  private category = '';

  get totalArticlesCards(): number {
    return this.articlesCards.length;
  }

  get categories() {
    return this.apiSignalState
      .result()
      .map(articleCard => articleCard.category)
      .filter(
        (category, index, categories) => categories.indexOf(category) === index
      );
  }

  get articlesCards(): ArticleCard[] {
    return this.apiSignalState.result().filter((articleCard: ArticleCard) => {
      return articleCard.category.includes(this.category);
    });
  }

  get isCompleted() {
    return this.apiSignalState.isCompleted();
  }

  get isWorking() {
    return this.apiSignalState.isWorking();
  }
  proposedArticles(articleId: string): void {
    const observable = this.articleService.proposedArticles(articleId).pipe(
      map((articles: ArticleDto[]) => {
        return articles.map((article: ArticleDto) =>
          this.articleMapper.toArticleCard(article)
        );
      })
    );

    this.apiSignalState.execute(observable);
  }

  filterByCategory(category: string) {
    this.category = category;
  }
}
