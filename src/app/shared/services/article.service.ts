import { inject, Injectable } from '@angular/core';
import { ArticleDto } from '@core/dtos/article.dto';
import { HttpClient } from '@angular/common/http';
import { ArticleSaveDto } from '@core/dtos/article-save.dto';

@Injectable()
export class ArticleService {
  static readonly API_URL = 'http://localhost:8080/api/v1/articles';
  private http = inject(HttpClient);

  save(article: ArticleSaveDto) {
    this.http
      .post<ArticleDto>(ArticleService.API_URL, article)
      .subscribe(response => console.log(response));
  }

  update(article: ArticleDto) {
    this.http
      .put<ArticleDto>(`${ArticleService.API_URL}/${article.id}`, article)
      .subscribe();
  }

  delete(id: string) {
    return this.http.delete(`${ArticleService.API_URL}/${id}`);
  }

  getById(id: string) {
    return this.http.get<ArticleDto>(`${ArticleService.API_URL}/${id}`);
  }
}
