import { inject, Injectable } from '@angular/core';
import { ArticleDto } from '@core/dtos/article/article.dto';
import { HttpClient } from '@angular/common/http';
import { FilterArticleDto } from '@core/dtos/article/filter-article.dto';
import { ProposedArticleDto } from '@core/dtos/article/proposed-article.dto';

@Injectable({ providedIn: 'root' })
export class ArticleService {
  static readonly API_URL = 'http://localhost:8080/api/v1/articles';
  private http = inject(HttpClient);

  save(article: ArticleDto) {
    return this.http.post<string>(ArticleService.API_URL, article);
  }

  update(article: ArticleDto) {
    return this.http.put<string>(
      `${ArticleService.API_URL}/${article.id}`,
      article
    );
  }

  delete(id: string) {
    return this.http.delete(`${ArticleService.API_URL}/${id}`);
  }

  getById(id: string) {
    return this.http.get<ArticleDto>(`${ArticleService.API_URL}/${id}`);
  }

  search(filterArticle: FilterArticleDto) {
    return this.http.get<Array<ArticleDto>>(
      `${ArticleService.API_URL}/search?title=${filterArticle.title}&category=${filterArticle.category}&state=${filterArticle.state}`
    );
  }

  getAll() {
    return this.http.get<Array<ArticleDto>>(`${ArticleService.API_URL}`);
  }

  proposedArticle(proposedArticleDto: ProposedArticleDto) {
    return this.http.post<string>(
      `${ArticleService.API_URL}/proposedArticles`,
      proposedArticleDto
    );
  }

  proposedArticlesByUserId(userId: string) {
    return this.http.get<Array<ArticleDto>>(
      `${ArticleService.API_URL}/proposedArticles/users/${userId}`
    );
  }

  proposedArticlesByArticleId(articleId: string) {
    return this.http.get<Array<ArticleDto>>(
      `${ArticleService.API_URL}/proposedArticles/articles/${articleId}`
    );
  }

  userHasMadeProposed(userId: string, articleId: string) {
    return this.http.get<boolean>(
      `${ArticleService.API_URL}/proposedArticles/users/${userId}/articles/${articleId}`
    );
  }
}
