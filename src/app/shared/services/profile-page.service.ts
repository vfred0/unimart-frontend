import { inject, Injectable } from '@angular/core';
import { ApiSignalState } from '@shared/services/api-signal-state';
import { ArticleCardDto } from '@core/dtos/article/article-card.dto';
import { map } from 'rxjs';
import { ArticleDto } from '@core/dtos/article/article.dto';
import { HttpClient } from '@angular/common/http';
import { ArticleService } from '@shared/services/article.service';
import { ArticleMapperService } from '@shared/services/mappers/article-mapper.service';
import { AuthService } from '@shared/services/auth.service';
import { TypeArticle } from '@core/types/type-article';
import { ProposedArticleService } from '@shared/services/proposed-article.service';

@Injectable()
export class ProfilePageService {
  private apiSignalState = new ApiSignalState<ArticleCardDto[]>([]);
  private readonly articleMapper = inject(ArticleMapperService);
  private readonly articleService = inject(ArticleService);
  private readonly proposedArticleService = inject(ProposedArticleService);
  private readonly http = inject(HttpClient);
  private readonly authService = inject(AuthService);
  private title = '';
  private typeArticle: TypeArticle = TypeArticle.Published;

  get containsPublishedArticles(): boolean {
    return this.articlesCards.length > 0;
  }

  get isPublished(): boolean {
    return this.typeArticle === TypeArticle.Published;
  }

  get articlesCards(): ArticleCardDto[] {
    return this.apiSignalState
      .result()
      .filter((articleCard: ArticleCardDto) => {
        const includesTitle = articleCard.title
          .toLowerCase()
          .includes(this.title.toLowerCase());
        if (this.typeArticle === TypeArticle.Published) {
          return includesTitle;
        }
        return (
          includesTitle && articleCard.typeArticle === TypeArticle.Proposed
        );
      });
  }

  get isWorking(): boolean {
    return this.apiSignalState.isWorking();
  }

  get isCompleted(): boolean {
    return this.apiSignalState.isCompleted();
  }

  get categories() {
    return this.apiSignalState
      .result()
      .map(articleCard => articleCard.category)
      .filter(
        (category, index, categories) => categories.indexOf(category) === index
      );
  }

  allArticles(): void {
    const request = this.articleService
      .getByUserId(this.authService.userId)
      .pipe(
        map((articles: ArticleDto[]) => {
          return articles.map((article: ArticleDto) =>
            this.articleMapper.toArticleCard(article)
          );
        })
      );
    this.apiSignalState.execute(request);
  }

  filterByTitle(title: string) {
    this.title = title;
  }

  filterByTypeArticle(typeArticle: TypeArticle) {
    this.typeArticle = typeArticle;
  }

  deleteArticle(articleId: string) {
    this.articleService.delete(articleId).subscribe(() => {
      this.allArticles();
    });
  }

  deleteProposedArticleById(proposedArticleId: string) {
    this.proposedArticleService.deleteById(proposedArticleId).subscribe(() => {
      this.allArticles();
    });
  }
}
