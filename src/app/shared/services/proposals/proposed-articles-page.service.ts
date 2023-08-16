import { ArticleDto } from '@core/dtos/article/article.dto';
import { inject, Injectable } from '@angular/core';
import { ArticleMapperService } from '@shared/mappers/article-mapper.service';
import { Service } from '@shared/services/service';
import { ArticleCardDto } from '@core/dtos/article/article-card.dto';
import { AppRoute } from '@core/utils/app-route';
import { Router } from '@angular/router';
import { ProposalService } from '@shared/services/proposals/proposal.service';
import { map } from 'rxjs';
import { ArticleCardService } from '@shared/services/articles/article-card.service';

@Injectable({ providedIn: 'root' })
export class ProposedArticlesPageService extends Service<ArticleCardDto[]> {
  articleId = '';
  private readonly articleMapper = inject(ArticleMapperService);
  private readonly proposedArticleService = inject(ProposalService);
  private readonly router = inject(Router);
  private readonly articleCardService = inject(ArticleCardService);
  private category = '';

  constructor() {
    super([] as ArticleCardDto[]);
  }

  override get isCompleted() {
    const isCompleted = super.isCompleted();
    if (isCompleted) {
      this.articleCardService.setArticlesCards(this.result());
    }
    return super.isCompleted;
  }

  get totalArticlesCards(): number {
    return this.articleCardService.totalArticlesCards;
  }

  get categories() {
    return this.articleCardService.categories;
  }

  get articlesCards(): ArticleCardDto[] {
    return this.articleCardService.filterByCategory(this.category);
  }

  proposedArticles(articleId: string): void {
    const request = this.proposedArticleService
      .getProposerArticlesByReceiverArticleId(articleId)
      .pipe(
        map((articles: ArticleDto[]) => {
          return articles.map((article: ArticleDto) =>
            this.articleMapper.toArticleCard(article)
          );
        })
      );
    this.execute(request);
  }

  filterByCategory(category: string) {
    this.category = category;
  }

  deleteProposed(proposedArticleId: string) {
    this.proposedArticleService.deleteById(proposedArticleId).subscribe(() => {
      this.proposedArticleService
        .getProposerArticlesByReceiverArticleId(this.articleId)
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
