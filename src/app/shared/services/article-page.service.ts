import { inject, Injectable } from '@angular/core';
import { ApiSignalState } from '@shared/services/api-signal-state';
import { ArticleDto } from '@core/dtos/article.dto';
import { HttpClient } from '@angular/common/http';
import { HeaderDetail } from '@core/utils/header-detail';
import { ArticlePage } from '@core/models/article-page';
import { ArticleService } from '@shared/services/article.service';
import { ArticleMapperService } from '@shared/services/mappers/article-mapper.service';
import { UserMapperService } from '@shared/services/mappers/user-mapper.service';

@Injectable()
export class ArticlePageService {
  private apiSignalState = new ApiSignalState<ArticleDto>({} as ArticleDto);
  private http = inject(HttpClient);
  private articleMapper = inject(ArticleMapperService);
  private userMapper = inject(UserMapperService);

  get user() {
    return this.articlePage.user;
  }

  get headerDetail(): HeaderDetail {
    // if (this.isCompleted) {
    return this.userMapper.toHeaderDetails(this.apiSignalState.result().user);
    // }
    // return {} as HeaderDetail;
  }

  get articlePage(): ArticlePage {
    // if (this.isCompleted) {
    return this.articleMapper.toArticlePage(this.apiSignalState.result());
    // }
    // return {} as ArticlePage;
  }

  get isWorking() {
    return this.apiSignalState.isWorking();
  }

  get isCompleted() {
    return this.apiSignalState.isCompleted();
  }

  getById(id: string): void {
    const getById = this.http.get<ArticleDto>(
      `${ArticleService.API_URL}/${id}`
    );
    this.apiSignalState.execute(getById);
  }
}
