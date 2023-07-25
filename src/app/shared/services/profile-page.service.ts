import { inject, Injectable } from '@angular/core';
import { ApiSignalState } from '@shared/services/api-signal-state';
import { ArticleCard } from '@core/models/article-card';
import { map } from 'rxjs';
import { ArticleDto } from '@core/dtos/article.dto';
import { HttpClient } from '@angular/common/http';
import { ArticleService } from '@shared/services/article.service';
import { ArticleMapperService } from '@shared/services/mappers/article-mapper.service';
import { AuthService } from '@shared/services/auth.service';
import { TypeArticle } from '@core/types/type-article';

@Injectable({ providedIn: 'root' })
export class ProfilePageService {
  private apiSignalState = new ApiSignalState<ArticleCard[]>([]);
  private readonly articleMapper = inject(ArticleMapperService);
  private readonly articleService = inject(ArticleService);
  private readonly http = inject(HttpClient);
  private readonly authService = inject(AuthService);
  private title = '';
  private typeArticle: TypeArticle = TypeArticle.Published;

  get isPublished(): boolean {
    return this.typeArticle === TypeArticle.Published;
  }

  get articlesCards(): ArticleCard[] {
    return this.apiSignalState.result().filter((articleCard: ArticleCard) => {
      return (
        articleCard.title.includes(this.title) &&
        articleCard.typeArticle === this.typeArticle
      );
    });
  }

  get isWorking(): boolean {
    return this.apiSignalState.isWorking();
  }

  get isCompleted(): boolean {
    return this.apiSignalState.isCompleted();
  }

  allArticles(): void {
    const request = this.http
      .get<Array<ArticleDto>>(
        `${ArticleService.API_URL}/user/${this.authService.user.id}`
      )
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

  deleteArticle(articleId: string) {
    this.articleService.delete(articleId).subscribe(() => {
      this.allArticles();
    });
  }

  filterByTypeArticle(typeArticle: TypeArticle) {
    this.typeArticle = typeArticle;
  }

  get categories() {
    return this.apiSignalState
      .result()
      .map(articleCard => articleCard.category)
      .filter(
        (category, index, categories) => categories.indexOf(category) === index
      );
  }
}
