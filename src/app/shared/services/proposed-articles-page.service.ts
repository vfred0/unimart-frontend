import { map } from 'rxjs';
import { ArticleDto } from '@core/dtos/article/article.dto';
import { inject, Injectable } from '@angular/core';
import { ArticleMapperService } from '@shared/services/mappers/article-mapper.service';
import { ApiSignalState } from '@shared/services/api-signal-state';
import { ArticleCardDto } from '@core/dtos/article/article-card.dto';
import { AppRoute } from '@core/utils/app-route';
import { Router } from '@angular/router';
import { ProposedArticleService } from '@shared/services/proposed-article.service';

@Injectable()
export class ProposedArticlesPageService {
  articleId = '';
  private apiSignalState = new ApiSignalState<ArticleCardDto[]>([]);
  private articleMapper = inject(ArticleMapperService);
  private readonly proposedArticleService = inject(ProposedArticleService);
  private router = inject(Router);
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

  get articlesCards(): ArticleCardDto[] {
    return this.apiSignalState
      .result()
      .filter((articleCard: ArticleCardDto) => {
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
    const request = this.proposedArticleService
      .proposedArticlesByArticleId(articleId)
      .pipe(
        map((articles: ArticleDto[]) => {
          return articles.map((article: ArticleDto) =>
            this.articleMapper.toArticleCard(article)
          );
        })
      );
    this.apiSignalState.execute(request);
  }

  filterByCategory(category: string) {
    this.category = category;
  }

  deleteProposed(proposedArticleId: string) {
    this.proposedArticleService.deleteById(proposedArticleId).subscribe(() => {
      this.proposedArticleService
        .proposedArticlesByArticleId(this.articleId)
        .subscribe((articles: ArticleDto[]) => {
          if (articles.length === 0) {
            this.router.navigate([`${AppRoute.Profile}`]).then();
          } else {
            this.proposedArticles(this.articleId);
          }
        });
    });
  }
}
