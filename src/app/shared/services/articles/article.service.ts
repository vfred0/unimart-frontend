import { inject, Injectable } from '@angular/core';
import { ArticleDto } from '@core/dtos/article/article.dto';
import { HttpClient } from '@angular/common/http';
import { FilterArticleDto } from '@core/dtos/article/filter-article.dto';

@Injectable({ providedIn: 'root' })
export class ArticleService {
  static readonly API_URL = 'http://localhost:8080/api/v1/articles';
  private http = inject(HttpClient);

  save(userId: string, article: ArticleDto) {
    return this.http.post<string>(
      `${ArticleService.API_URL}/${userId}`,
      article
    );
  }

  update(articleId: string, article: ArticleDto) {
    return this.http.put<string>(
      `${ArticleService.API_URL}/${articleId}`,
      article
    );
  }

  getById(id: string) {
    return this.http.get<ArticleDto>(`${ArticleService.API_URL}/${id}`);
  }

  search(filterArticle: FilterArticleDto) {
    return this.http.get<Array<ArticleDto>>(
      `${ArticleService.API_URL}/search?title=${filterArticle.title}&category=${filterArticle.category}&state=${filterArticle.state}`
    );
  }

  delete(articleId: string) {
    return this.http.delete<string>(`${ArticleService.API_URL}/${articleId}`);
  }
}
