import { inject, Injectable } from '@angular/core';
import { ArticleDto } from '@core/dtos/article.dto';
import { HttpClient } from '@angular/common/http';
import { FilterArticleDto } from '@core/dtos/filter-article.dto';
import { SuggestArticleDto } from '@core/dtos/suggest-article.dto';

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

  suggest(proposalArticleDto: SuggestArticleDto) {
    return this.http.post<string>(
      `${ArticleService.API_URL}/suggest`,
      proposalArticleDto
    );
  }

  proposedArticles(articleId: string) {
    return this.http.get<Array<ArticleDto>>(
      `${ArticleService.API_URL}/proposedArticles/${articleId}`
    );
  }
}
