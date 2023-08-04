import { inject, Injectable } from '@angular/core';
import { ArticleDto } from '@core/dtos/article/article.dto';
import { HttpClient } from '@angular/common/http';
import { ProposedArticleDto } from '@core/dtos/article/proposed-article.dto';

@Injectable({ providedIn: 'root' })
export class ProposedArticleService {
  private readonly API_URL = 'http://localhost:8080/api/v1/proposedArticles';
  private http = inject(HttpClient);

  save(proposedArticleDto: ProposedArticleDto) {
    return this.http.post<ArticleDto>(this.API_URL, proposedArticleDto);
  }

  deleteById(id: string) {
    return this.http.delete(`${this.API_URL}/${id}`);
  }

  proposedArticlesByArticleId(articleId: string) {
    return this.http.get<ArticleDto[]>(`${this.API_URL}/${articleId}`);
  }
}
